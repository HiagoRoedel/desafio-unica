import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

// Verifique se a URL do banco de dados está definida
const url = process.env.DATABASE_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!url) {
        res.status(500).json({ error: 'Database URL not defined' });
        return;
    }

    const client = new MongoClient(url);

    try {
        await client.connect();

        // Conectar ao banco de dados e à coleção
        const db = client.db('clientes'); // Substitua 'seuNomeDeBancoDeDados' pelo nome do seu banco de dados
        const collection = db.collection('customers'); // Nome da coleção

        // Buscar todos os documentos da coleção
        const customers = await collection.find().toArray();

        // Retornar os documentos na resposta
        res.status(200).json({
            message: 'Customers fetched successfully',
            customers: customers
        });
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({ error: 'Failed to fetch customers from the database' });
    } finally {
        await client.close();
    }
}
