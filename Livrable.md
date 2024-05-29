## Processus de développement  
- Comprendre le code existant et les exigences de la tâche.
- Identifié la logique qui devait être réutilisable dans différents composants.
- Identifier les élement qui pouvait être factorisé.
- Créer un hook personnalisé pour factoriser la logique de filtrage des domaines.
- Tester le hook personnalisé pour s'assurer qu'il fonctionne correctement.
- Améliorer le nom des variables pour plus de clarté.

## Comment réutiliser la fonctionnalité :  
- Importez le hook useDomainFilter dans le composant où vous souhaitez l'utiliser.
```
const Component = ({ domains = [] }: Props) => {

  const {countries, classifications, subClassifications} = useDomainFilter(domains);

  return (
      <>
      </>
  );
}

export default Component
```