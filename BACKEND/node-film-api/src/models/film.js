module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Film', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Le nom du film ne peut être nul.' },
                notNull: { msg: 'Le nom du film est une propriété requise.' }
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'La description du film ne peut être nul.' },
                notNull: { msg: 'Le nom de la description du film est une propriété requise.' }
            }
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'Une photo du film est requis.' }
            }
        },
        video: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: { msg: 'Utilisez uniquement des nombres entiers pour la date' },
                notNull: { msg: 'La date est une propriété requise' }
            }
        },
        types: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue('types').split(',')
            },
            set(types) {
                this.setDataValue('types', types.join())
            },
            validate: {
                isTypesValid(value) {
                    if (!value) {
                        throw new Error('Un film doit avoir au moins un type.')
                    }
                    if (value.split(',').length > 3) {
                        throw new Error('Un film ne peut avoir plus de trois types.')
                    }
                }
            }
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}