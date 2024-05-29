import {useEffect, useState} from "react";

interface State {
    countries: string[],
    classifications: string[],
    subClassifications: string[]
}

export const useDomainFilter = (domains: string[] | undefined) => {

    let [state, setState] = useState<State>({
        countries: [],
        classifications: [],
        subClassifications: []
    });


    useEffect(() => {
        if (!domains?.length) return;

        const countriesSet = new Set<string>();
        const classificationsSet = new Set<string>();
        const subClassificationsSet = new Set<string>();

        domains.forEach(domain => {
            countriesSet.add(domain.substring(0, 2));
            classificationsSet.add(domain.substring(3, 5));
            subClassificationsSet.add(domain.substring(6, 9));
        });

        setState({
            countries: Array.from(countriesSet),
            classifications: Array.from(classificationsSet),
            subClassifications: Array.from(subClassificationsSet)
        })

    }, [domains]);

    return state;
}