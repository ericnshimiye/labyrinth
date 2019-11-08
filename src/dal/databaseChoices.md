# Database choices

## Context

I wanted to connect the API to a managed cloud base data storage. I also wanted to have an option that makes it easier for others to test the API without having to configure any external cloud account.

## Decision

The project uses [mongodb](https://www.mongodb.com/cloud/atlas) as main database. But for developpement purpose it offers the possibility to use [pouchdb](https://pouchdb.com/) as in-memory database.

## Configuration

You have to provide the environnement variable PERSISTENCE_STRATEGY that might be either **_mongodb_** or **_pouchdb_** to switch between using one or the other.