export const TestDatas = (sequelize: any, DataTypes: any) => {
  const TestDatas = sequelize.define(
    "TestDatas",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        // defaultValue: "",
        type: DataTypes.STRING,
      },
    },
    {
      createdAt: false, // don't add createdAt attribute
      updatedAt: false,
    }
  );

  return TestDatas;
};
