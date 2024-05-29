import {useEffect, useState} from "react";

interface State {
    countries: string[],
    classifications: string[],
    subClassifications: string[]
}

export const useDomainFilter = (domains: string[] | undefined) => {
    const countries: string[] = [];
    const classifications: string[] = [];
    const subClassifications: string[] = [];

    let [state, setState] = useState<State>({
        countries: [],
        classifications: [],
        subClassifications: []
    });


    useEffect(() => {
        if (!domains?.length) return;
        for(let i = 0; i < domains.length; i++) {
            if (countries.indexOf(domains[i].substring(0,2)) <= 0) {
                countries.push(domains[i].substring(0,2))
            }
            classifications.push(domains[i].substring(3,5));
            let flag = false;
            for(let j = 0; j < subClassifications.length; j++) {
                if (subClassifications[j] === domains[i].substring(6)) {
                    flag = true
                    break;
                }
            }
            if (!flag) {
                subClassifications.push(domains[i].substring(6));
            }
        }
        setState({
            countries: countries,
            classifications: classifications.filter((e, i, l) => l.indexOf(e) === i),
            subClassifications: subClassifications
        });
    }, [domains]);

    return state;
}