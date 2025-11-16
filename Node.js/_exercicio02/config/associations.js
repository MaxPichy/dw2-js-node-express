import Troca from '../models/Troca.js';
import Livro from '../models/Livro.js';
import Intruso from '../models/Intruso.js';

const defineAssociations = () => {
    Intruso.hasMany(Troca, {foreignKey: 'idIntruso'});
    Livro.hasMany(Troca, {foreignKey: 'idLivro'});

    Troca.belongsTo(Intruso, {foreignKey: 'idIntruso'});
    Troca.belongsTo(Livro, {foreignKey: 'idLivro'});
};

export default defineAssociations;