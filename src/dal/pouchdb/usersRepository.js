const pouchdb = require('pouchdb');
const pouchdbFind = require('pouchdb-find');
const uuidv1 = require('uuid/v1');

pouchdb.plugin(pouchdbFind);

/** Class representing a mongo db repository. */
class usersRepository {
    /**
     * constructor
     */
    constructor() {
        this.db = new pouchdb('.data/pouchdb/users');
    }
    /**
     * @param {string} email
     * @return {Promise} promise
     */
    findByEmail({email}) {
        const findPromise = new Promise((resolve, reject) => {
            this.db.createIndex({index: {fields: ['email']}})
                .then(()=>{
                    this.db.find({selector: {email: {$eq: email}}})
                        .then((response)=>{
                            if (response && response.docs && response.docs.length === 1) {
                                const user = response.docs[0];
                                resolve({...user, id: user._id});
                            } else {
                                resolve(null);
                            }
                        })
                        .catch((err)=>{
                            reject(err);
                        });
                }).catch((err)=>{
                    reject(err);
                });
        });
        return findPromise;
    }

    /**
     * @param {number} id
     * @return {Promise} promise
     */
    findById({id}) {
        const findPromise = new Promise((resolve, reject) => {
            this.db.get(id)
                .then((user)=>{
                    if (user) {
                        resolve({...user, id: user._id});
                    } else {
                        resolve(null);
                    }
                }).catch((err)=>{
                    reject(err);
                });
        });
        return findPromise;
    }

    /**
     * @return {Promise} promise
     */
    findAll() {
        const findAllPromise = new Promise((resolve, reject) => {
            const options = {include_docs: true, attachments: false};
            this.db.allDocs(options)
                .then((response) => {
                    if (response && response.total_rows > 0) {
                        const docs = response.rows.map((row) => {
                            return {...row.doc, id: row.doc._id};
                        }).filter((row) => row.email);
                        resolve(docs);
                    } else {
                        resolve([]);
                    }
                }).catch((err) => {
                    reject(err);
                });
        });
        return findAllPromise;
    }

    /**
     * @param {userDto} userDto
     * @return {Promise} promise
     */
    insert(userDto) {
        const user = {...userDto, _id: uuidv1(), role: 'admin'};
        return this.db.put(user);
    }
};

module.exports = usersRepository;
