const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('tipo', {
        ID: {
            primaryKey: true,
            type:DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
          },

        Nombre: {
            type: DataTypes.STRING,
        },
    });
}