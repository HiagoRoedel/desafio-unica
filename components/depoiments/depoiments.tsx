'use client'

import { ObjectId } from 'mongodb';
import './depoiments.css'
import { useEffect, useState } from 'react';

// interface Customer {
//     _id: ObjectId;
//     name: string;
//     email: string;
// }

export default function Depoiments() {
//     const [customers, setCustomers] = useState<Customer[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchCustomers = async () => {
//             try {
//                 const response = await fetch('/api/bancoMongo');
//                 if (!response.ok) throw new Error('Network response was not ok');
//                 const data = await response.json();
                
//                 if (Array.isArray(data)) {
//                     setCustomers(data);
//                 } else {
//                     throw new Error('Data is not an array');
//                 }
//             } catch (error) {
//                 setError('Failed to fetch customers');
//                 console.error('Failed to fetch customers:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCustomers();
//     }, []);

//     // Debugging: Log state changes
//     useEffect(() => {
//         console.log('Customers:', customers);
//         console.log('Loading:', loading);
//         console.log('Error:', error);
//     }, [customers, loading, error]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }


    return(
        <>
        <div className="w-full h-[560px] cordefundo usarimagem">
            
  <div className="pt-12 title-modality text-white text-center mb-8 definirfonte">
<h1 className="text-3xl font-bold mb-2">Lado a lado com a sua evolução</h1>
  </div>
  <div className="flex items-center justify-center gap-3">
 
                    <div className="mt-10 h-[330px] w-[340px] rounded-xl bg-black p-4 shadow-sm backdrop-blur-lg xl:w-[420px] items-center flex text-center">
                        <h3 className="text-white"></h3>
                    </div>
         
  <div className="mt-10 h-[330px] w-[340px] rounded-xl bg-black p-4 shadow-sm backdrop-blur-lg xl:w-[420px] items-center flex text-center">
    
  </div>
  <div className="mt-10 h-[330px] w-[340px] rounded-xl bg-black p-4 shadow-sm backdrop-blur-lg xl:w-[420px] items-center flex text-center">
    
  </div>
  </div>
        </div>
        
        </>
    )
}
