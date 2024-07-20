import { Slot } from 'expo-router';
import NavBar from '../components/NavBar';
import React from 'react';
import { SQLiteProvider } from 'expo-sqlite';

export default function homeLayout() {
    return (
        <SQLiteProvider databaseName='leagues.db' onInit={initializeDB}>
            <NavBar />
            <Slot />
        </SQLiteProvider>
    );
}

async function initializeDB(db) {
    try {
        await db.execAsync(`
            PRAGMA journal_mode = 'wal';
            CREATE TABLE IF NOT EXISTS leagues (
                name TEXT PRIMARY KEY NOT NULL, 
                year TEXT NOT NULL, 
                commissioner TEXT NOT NULL, 
                imagelink TEXT NOT NULL
            );
        `);

        const result = await db.getAllAsync(`SELECT * FROM leagues`);

        if (result.length === 0) {
            await db.runAsync(`INSERT INTO leagues (name, year, commissioner, imageLink) VALUES (?, ?, ?, ?)`, ["NHL", "1917", "Gary Bettman", "link"]);
            await db.runAsync(`INSERT INTO leagues (name, year, commissioner, imageLink) VALUES (?, ?, ?, ?)`, ["MLB", "1903", "Robert D. Manfred, Jr", "link"]);
            await db.runAsync(`INSERT INTO leagues (name, year, commissioner, imageLink) VALUES (?, ?, ?, ?)`, ["NFL", "1920", "Roger Goodell", "link"]);
        }

        const firstResult = await db.getFirstAsync(`SELECT * FROM leagues`);
        console.log(firstResult.name, firstResult.year, firstResult.commissioner, firstResult.imagelink);
    } catch (error) {
        console.error('Database initialization failed', error);
    }
}
