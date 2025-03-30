// export interface Plant {
//     id: number;
//     name: string;
//     price: number;
//     category: string;
//   }
  
//   const BASE_URL = "http://localhost:5000"; // Backend URL
  
//   export const fetchPlantsByCategory = async (category: string): Promise<Plant[]> => {
//     try {
//       const response = await fetch(`${BASE_URL}/plants/${category}`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch plants");
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Error fetching plants:", error);
//       return [];
//     }
//   };
  