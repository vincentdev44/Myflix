const validTypes = ['Drame', 'Romance', 'Action', 'Science Fiction', 'Fantastique', 'Aventure', 'Famille', 'Comédie', 'Animation', 'Thriller', 'Horreur']


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
            unique: {
                msg: 'Le nom du film est déja utilisé'
            },
            validate: {
                notEmpty: { msg: 'Le nom du film ne peut être nul.' },
                notNull: { msg: 'Le nom du film est une propriété requise.' },
                len: {
                    args: [1, 40],
                    msg: "Le nom doit être compris entre 1 et 40 cractères"
                }
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'La description du film ne peut être nul.' },
                notNull: { msg: 'Le nom de la description du film est une propriété requise.' },
                len: {
                    args: [1, 1000],
                    msg: "La description doit être compris entre 1 et 1000 cractères"
                }
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
                notNull: { msg: 'La date est une propriété requise' },
                min: {
                    args: 1900,
                    msg: "La date doit être supérieur à 1900"
                },
                max: {
                    args: 2500,
                    msg: "La date ne doit pas dépasser 2500"
                }
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
                    value.split(',').forEach(type => {
                        if (!validTypes.includes(type)) {
                            throw new Error(`Le type d'un film doit appartenir à la liste suivante : ${validTypes}`)
                        }
                    });
                }
            }
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}