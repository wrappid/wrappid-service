import { Injectable } from "@nestjs/common";
import { ConfigConstant, DatabaseService } from "@wrappid/service-core";
// import { Sequelize } from "sequelize-typescript";

const {
  clearValidatePhoneEmail,
  getDeviceId,
  COMMUNICATION_EMAIL,
  COMMUNICATION_SMS,
} = require("./utils/auth.utils");

@Injectable()
export class AuthService {
  constructor(
    private readonly databaseService: DatabaseService
    // private readonly sequelize: Sequelize
  ) {}
  async checkLoginOrRegister(req: any): Promise<any> {
    try {
      const dbTxn = await this.databaseService.getTransaction();
      // let iWsValidJOI = await authenticateJOI(req,"checkLoginOrRegisterPOST",["body","query"])
      let emailOrPhone = req.body.emailOrPhone;
      let ob = clearValidatePhoneEmail(emailOrPhone);
      let whereOb = {};
      if (ob.type === COMMUNICATION_EMAIL) whereOb = { email: emailOrPhone };
      else if (ob.type === COMMUNICATION_SMS) whereOb = { phone: emailOrPhone };
      else {
        console.log("Not a valid email or phone");
        return { staus: 500, message: "Not a valid email or phone" };
      }

      let data = await this.databaseService.findOne("application", "Users", {
        where: whereOb,
      });

      if (data) {
        if (data.firstLogin) {
          console.log("User found, first time login", data.id);
          return { status: 201, message: "First login for created user" };
        } else {
          console.log("User found", data.id);
          let personData = await this.databaseService.findOne(
            "application",
            "Persons",
            {
              where: {
                userId: data.id,
              },
            }
          );

          return {
            status: 200,
            message: "User Found",
            data: {
              name:
                personData.firstName +
                " " +
                personData.middleName +
                " " +
                personData.lastName,
              photoUrl: personData.photoUrl,
              isVerified: personData.isVerified,
            },
          };
        }
      } else {
        if (ob.valid) {
          let userBody = whereOb;

          let rolesData = await this.databaseService.findOne(
            "application",
            "Roles",
            {
              where: { role: "doctor" },
            },
          );
          let userData = await this.databaseService.create(
            "application",
            "Users",
            {
              ...userBody,
              roleId: rolesData.id,
              firstLogin: true,
            },
            { transaction: dbTxn }
          );
          console.log("User Created", userData.id);

          let personData = await this.databaseService.create(
            "application",
            "Persons",
            {
              ...userBody,
              profileId: Date.now(),
              userId: userData.id,
              /**
               * @todo
               * added for phase 0.5
               */
              isVerified: true,
            },
            { transaction: dbTxn }
          );
          console.log("Person Created", personData.id);

          let person = await this.databaseService.create(
            "application",
            "PersonContacts",
            {
              data: emailOrPhone,
              type:
                // ConfigConstant.communication.EMAIL
                ob.type === ConfigConstant.contact.EMAIL
                  ? ConfigConstant.contact.EMAIL
                  : ConfigConstant.contact.PHONE,
              personId: personData.id,
              _status: ConfigConstant.entityStatus.ACTIVE,
            },
            { transaction: dbTxn }
          );
          console.log("Person contact Created", person.id);

          console.log("New User created");
          return { status: 201, message: "New User created" };

        } else {
          console.error("Not a valid mail or phone:", emailOrPhone);
          return { status: 405, message: "Not valid phone or email" };
        }
      }
    } catch (err) {
      console.log("Error in check register", err);
      throw err;
    }
  }
}
