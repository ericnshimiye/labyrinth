const pouchdb = require('pouchdb');
const pouchdbFind = require('pouchdb-find');
const uuidv1 = require('uuid/v1');

pouchdb.plugin(pouchdbFind);

/** Class representing a mongo db teams repository. */
class teamsRepository {
    /**
     * constructor
     */
    constructor() {
        this.db = new pouchdb('.data/pouchdb/teams');
    }
    /**
     * @param {string} code
     * @return {Promise} promise
     */
    findByCode({code}) {
        const findPromise = new Promise((resolve, reject) => {
            this.db.createIndex({index: {fields: ['code']}})
                .then(() => {
                    this.db.find({selector: {code: {$eq: code}}})
                        .then((response) => {
                            if (response && response.docs && response.docs.length === 1) {
                                const team = response.docs[0];
                                resolve({...team, id: team._id});
                            } else {
                                resolve(null);
                            }
                        }).catch((err) => {
                            reject(err);
                        });
                }).catch((err) => {
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
                        }).filter((row) => row.code && row.name);
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
     * @param {teamDto} teamDto
     * @return {Promise} promise
     */
    insert(teamDto) {
        const team = {...teamDto, _id: uuidv1()};
        return this.db.put(team);
    }
};

module.exports = teamsRepository;
