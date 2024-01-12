const HomePage = ({data}) => {

    const tableVoiture = () => {
        if(data != null)
        {
            return (
                <table class="table">
                        <thead>
                            <tr>
                                <th>Numéro Voiture</th>
                                <th>Marque</th>
                                <th>Année</th>
                                <th>Nombre de kilomètre</th>
                                <th>Puissance</th>
                                <th>Type de carburant</th>
                                <th>Boite de vitesse</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(data).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{Array.isArray(value.model) ? value.model.join(', ') : value.model}</td>
                                    <td>{Array.isArray(value.annee) ? value.annee.join(', ') : value.annee}</td>
                                    <td>{Array.isArray(value.kilometre) ? value.kilometre.join(', ') : value.kilometre}</td>
                                    <td>{Array.isArray(value.puissance) ? value.puissance.join(', ') : value.puissance}</td>
                                    <td>{Array.isArray(value.carburant) ? value.carburant.join(', ') : value.carburant}</td>
                                    <td>{Array.isArray(value.boite) ? value.boite.join(', ') : value.boite}</td>
                                    <td>{Array.isArray(value.detail) ? value.detail.join(', ') : value.detail}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
            )
        }
        else
        {
            return
            (
                <h2>Pas de voiture en stock</h2>
            )
        }
    }
    return (
        <>
            <h1>
                Page du magasin
            </h1>
            {tableVoiture()}
            
        </>
        


    )
}

export default HomePage;