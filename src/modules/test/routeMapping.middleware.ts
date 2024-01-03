import { Injectable, NestMiddleware } from "@nestjs/common";
import {
  ControllerRegistry,
  DatabaseService,
  EntityRegistry,
} from "@wrappid/service-core";
import { Request, Response, NextFunction } from "express";
import { PathMatcher } from "./validation/path.matcher";

@Injectable()
export class CustomRouteMatchingMiddleware implements NestMiddleware {
  private static pathMatcher = new PathMatcher();

  constructor(private readonly databaseService: DatabaseService) {}

  // private routes = [
  //   {
  //     path: "/auth/users/:id",
  //     controller: "AuthController",
  //     method: "getById",
  //     reqMethod: "GET",
  //   },
  //   {
  //     path: "/auth/users",
  //     controller: "AuthController",
  //     method: "getUsers",
  //     reqMethod: "GET",
  //   },
  //   {
  //     path: "/auth/usersId/:id",
  //     controller: "AuthController",
  //     method: "getUsers",
  //     reqMethod: "GET",
  //   },
  // ];

  async setData() {
    const connection = await this.databaseService.getConnection("wrappid");
    // console.log(connection);

    const Routes = EntityRegistry.getRegistryEntity("Routes");
    const routesData = await connection.manager.find(Routes);
    // console.log(routesData);
    routesData.find((route) => {
      CustomRouteMatchingMiddleware.pathMatcher.registerPath(route.url, route);
    });
  }
  async use(req: Request, res: Response, next: NextFunction) {
    req.params = { id: "78" };
    console.log(req.params);

    this.setData();
    const matchingRoute = (req: Request) => {
      const pathMatch = CustomRouteMatchingMiddleware.pathMatcher.matchPath(
        req.baseUrl
      );
      return pathMatch;
    };
    const matchRoute = matchingRoute(req);
    if (matchRoute) {
      await next();
      const controller = await this.getControllerInstance(
        matchRoute.controllerRef
      );
      try {
        const method = matchRoute.functionRef;
        const result = await controller.prototype[method].call(req, res); // Invoke using dynamic property access
        console.log(result);
        // res.status(200).json({ data: result });

        // Handle the response from the controller
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
    } else {
      next(); // Pass to the next middleware or handle 404
    }
  }

  private async getControllerInstance(controllerName: string): Promise<any> {
    const controllerInstance =
      ControllerRegistry.getRegistryEntity(controllerName);
    return controllerInstance;
  }
}
