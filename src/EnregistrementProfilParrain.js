import React, { useState } from 'react';
//import axios from 'axios';

function EnregistrementProfilParrain() {
  const [infos, setInfos] = useState({
    numeroCarteElecteur: '',
    numeroCarteIdentite: '',
    nom: '',
    bureauVote: '',
    email: '',
    telephone: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*try {
      const response = await axios.post('/api/profil-parrain', infos);
      console.log(response.data);
      // Afficher un message de succès à l'utilisateur
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement du profil du parrain :', error);
      // Afficher un message d'erreur à l'utilisateur
    }*/
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfos(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ marginTop: '2rem' }}>INSCRIPTION</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="text" name="numeroCarteElecteur" value={infos.numeroCarteElecteur} onChange={handleChange} style={{ width: '300px' }} />
          <label style={{ marginTop: '0.5rem' }}>Numéro de carte d'électeur :</label>
        </div>

        <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="text" name="numeroCarteIdentite" value={infos.numeroCarteIdentite} onChange={handleChange} style={{ width: '300px' }} />
          <label style={{ marginTop: '0.5rem' }}>Numéro de carte d'identité nationale :</label>
        </div>

        <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="text" name="nom" value={infos.nom} onChange={handleChange} style={{ width: '300px' }} />
          <label style={{ marginTop: '0.5rem' }}>Nom :</label>
        </div>

        <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="text" name="bureauVote" value={infos.bureauVote} onChange={handleChange} style={{ width: '300px' }} />
          <label style={{ marginTop: '0.5rem' }}>Bureau de vote :</label>
        </div>

        <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="email" name="email" value={infos.email} onChange={handleChange} style={{ width: '300px' }} />
          <label style={{ marginTop: '0.5rem' }}>Email :</label>
        </div>

        <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="text" name="telephone" value={infos.telephone} onChange={handleChange} style={{ width: '300px' }} />
          <label style={{ marginTop: '0.5rem' }}>Téléphone :</label>
        </div>

        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Enregistrer</button>
      </form>
    </div>
  );
}

export default EnregistrementProfilParrain;
