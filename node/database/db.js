import {Sequelize} from 'sequelize'

const db = new Sequelize('blogs','root','cristian13',{
host:'localhost',
dialect:'mysql'
})

export default db