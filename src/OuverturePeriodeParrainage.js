import React, { useState } from 'react';
//import axios from 'axios'; // Import d'Axios

function OuverturePeriodeParrainage() {
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*try {
      // Envoi des données à l'API backend
      const response = await axios.post('https://apex.oracle.com/pls/apex/candidat/election/electeur', { dateDebut, dateFin });
      console.log(response.data);
      // Afficher un message de succès à l'utilisateur si nécessaire
    } catch (error) {
      console.error('Erreur lors de l\'ouverture de la période de parrainage :', error);
      setError('Une erreur s\'est produite lors de l\'enregistrement de la période de parrainage.');
    }*/
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundImage: "url('https://www.ancienscombattants.net/1453-tm_large_default/drapeaux-senegal.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '2rem', color: 'black' }}>PERIODE DE PARRAINAGE</h2> {/* Modifier la couleur ici */}
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} style={{ textAlign: 'center', color: '#ffffff' }}>
        <label style={{ marginBottom: '0.5rem', color: 'black' }}>Date de début :</label> {/* Modifier la couleur ici */}
        <br />
        <input type="date" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} style={{ marginBottom: '1rem' }} />
        <br />
        <label style={{ marginBottom: '0.5rem', color: 'black' }}>Date de fin :</label> {/* Modifier la couleur ici */}
        <br />
        <input type="date" value={dateFin} onChange={(e) => setDateFin(e.target.value)} style={{ marginBottom: '1rem' }} />
        <br />
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '0.5rem 3rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Enregistrer</button>
      </form>
    </div>
  );
}

export default OuverturePeriodeParrainage;
