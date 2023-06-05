import { useEffect, useState } from 'react';
import { getPerson } from './getPerson';

export function PersonScore() {
  // on utilise | pour definir une union de type, name peut etre de type undefined ou string
  const [name, setName] = useState<string | undefined>();
  const [load,setLoading] = useState<boolean>(true);



  useEffect(() => {
    getPerson().then(
      (person) => {
        console.log(person);
        setName(person.name);
        setLoading(false)
      },

      () => {},
    );
  }, []); 

    return <> {
        load && <div className="">Loading ...</div>}
        { load && <div className="">Hello {name}</div> }

 
    
</>;
  
}

// Afficher Loading... tant que name est undefined
// lorsque name vaut bob, afficher hello bob

// utiliser usestate a nouveau pour creer une variable d'etat booleene qui
// permettra de gerer l'affichage conditionnel