import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'

const AddCar = ({ updateAppData }) => {



    const typesCarburant = [
        'Essence',
        'Diesel',
        'GPL (Gaz de Pétrole Liquéfié)',
        'GNV (Gaz Naturel pour Véhicules)',
        'Éthanol',
        'Hybride Essence/Électrique',
        'Hybride Diesel/Électrique',
        'Électrique',
    ];
    const boiteVitesse = ['Manuelle', 'Automatique'];
    const plusDetail = ['Jantes aluminium', 'Airbags', 'Climatisation', 'Toit ouvrant', 'Siège cuir'];
    const marques = ['Fiat', 'Renault', 'Audi', 'Opel']
    const annees = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010',]

    const [selectedMarque, setSelectedMarque] = useState('')
    const [selectedBoite, setSelectedBoite] = useState('');
    const [selectedCarburant, setSelectedCarburant] = useState('');
    const [selectedDetail, setSelectedDetail] = useState([]);
    const [kilometrage, setKilometrage] = useState('')
    const [puissance, setPuissance]= useState('')
    const [selectedAnnee, setSelectedAnnee] = useState ('')
    const [data, setData] = useState([])

    const hangleChangeAnnee = e => {
        setSelectedAnnee(e.target.value)
    }

    const hanglePuissanceChange = e => {
        setPuissance(e.target.value)
    }

    const handleCarburantChange = (carburant) => {
        setSelectedCarburant(carburant);
    };

    const handleBoiteChange = (boite) => {
        setSelectedBoite(boite);
    };

    const handleDetailChange = (detail) => {
        setSelectedDetail((prevSelectedDetail) => {
            const isSelected = prevSelectedDetail.includes(detail);

            if (isSelected) {
                return prevSelectedDetail.filter((d) => d !== detail);
            } else {
                return [...prevSelectedDetail, detail];
            }
        });
    };

    const hangleDataChange = (carburant, boite, detail, kilo, puissance, model, annee) => {
        setData(()=>{
            const error = (needed) => {
                Swal.fire({
                    title: `erreur vous devez rentrer ${needed}`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                  })
            }

            
            if(carburant==''){
                error('Le carburant')
                return;
            }
            if(model==''){
                error('Le model')
                return;
            }
            if(annee==''){
                error("L'année")
                return;
            }
            if(boite==''){
                error('La boite')
                return;
            }
            if(kilo==''){
                error('Le nombre de kilomètre')
                return;
            }
            if(puissance==''){
                error('La Puissance')
                return;
            }
            const newCar = {
                'model': model,
                'annee': annee,
                'carburant': carburant,
                'boite': boite,
                'detail': detail,
                'kilometre': kilo,
                'puissance': puissance
            };
            Swal.fire({
                title: 'Votre voiture a été ajouté',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            updateAppData(newCar)
        })
    } 
    
    const hangleKilometrage = (e) => {
        setKilometrage(e.target.value)
    }
    
    const hangleChangeMarque = e => {
        setSelectedMarque(e.target.value)
    }

    return (
        <>
                        <div className='text-center mb-4'>
                <h1>Ajouter une voiture</h1>
                <p>Ajouter un maximum de détail pour plus de visibilité</p>
            </div>

            <div className='text-center mb-2 d-flex align-items-center'>
                <label htmlFor='marque' className='mb-0 me-3'>
                    *Marque
                </label>
                <select className='form-select form-select-sm' name='marque' id='marque' value={selectedMarque} style={{ width: '30%' }} onChange={hangleChangeMarque}>
                    <option value="">Sélectionner une option</option>
                    {marques.map((marque)=>(
                        <option value={marque}>
                            {marque}
                        </option>
                    ))}
                </select>
            </div>

            <div className='text-center mb-2 d-flex align-items-center'>
                <label htmlFor='anee' className='mb-0 me-3'>
                    *Année du modèle
                </label>
                <select className='form-select form-select-sm' name='annee' id='annee' value={selectedAnnee} style={{ width: '30%' }} onChange={hangleChangeAnnee}>
                    <option value="">Sélectionner une option</option>
                    {annees.map((annee)=>(
                        <option value={annee}>
                            {annee}
                        </option>
                    ))}
                </select>
            </div>

            <div className='text-center mb-2 d-flex align-items-center'>
                <label  className='mb-0 me-3'>
                    *Kilomètrage
                </label>
                <input type='number' className='form-number mb-0' value={kilometrage} onChange={hangleKilometrage} />
            </div>

            <div className='text-center mb-2 d-flex align-items-center'>
                <label htmlFor='puiss' className='mb-0 me-3'>
                    *Puissance fiscale
                </label>
                <input type='number' className='form-number mb-0' value={puissance} onChange={hanglePuissanceChange}/>
            </div>

            <div className='btn-group mt-4' data-toggle='buttons'>
                <label className='ml-2'>*Type de carburant</label>
                {typesCarburant.map((carburant) => (
                    <label
                        key={carburant}
                        className={`btn btn-primary ms-2 ${selectedCarburant === carburant ? 'active' : ''}`}
                    >
                        <input
                            type='radio'
                            name='carburant'
                            id={carburant}
                            autoComplete='off'
                            checked={selectedCarburant === carburant}
                            onChange={() => handleCarburantChange(carburant)}
                        />
                        {carburant}
                    </label>
                ))}
            </div>

            <div className='text-center mt-4'>
                <label className='ms-2'>*Boite de Vitesse</label>
                {boiteVitesse.map((boite) => (
                    <label
                        key={boite}
                        className={`btn btn-primary ms-2 ${selectedBoite === boite ? 'active' : ''}`}
                    >
                        <input
                            type='radio'
                            name='boite'
                            id={boite}
                            autoComplete='off'
                            checked={selectedBoite === boite}
                            onChange={() => handleBoiteChange(boite)}
                        />
                        {boite}
                    </label>
                ))}
            </div>

            <h1 className='text-center mb-4 mt-5'>Plus de détail</h1>
            <div className='text-center'>
                {plusDetail.map((detail) => (
                    <label
                        key={detail}
                        className={`btn btn-primary ms-2 ${selectedDetail.includes(detail) ? 'active' : ''}`}
                    >
                        <input
                            type='checkbox'
                            name='detail'
                            id={detail}
                            checked={selectedDetail.includes(detail)}
                            onChange={() => handleDetailChange(detail)}
                        />
                        {detail}
                    </label>
                ))}
            </div>
            <input type="button" value="Envoyer" class='btn btn-success' onClick={()=>hangleDataChange(selectedCarburant, selectedBoite, selectedDetail, kilometrage, puissance, selectedMarque, selectedAnnee,  )} />
        </>
        //Ajout par la suite de 'data' dans une possible base de donnée.
    );
};

export default AddCar;