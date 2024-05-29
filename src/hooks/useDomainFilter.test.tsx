import {useDomainFilter} from "./useDomainFilter";
import {renderHook} from "@testing-library/react";

describe('useDomainFilter', () => {
    it('should return empty arrays if no domains are provided', () => {
        const {result} = renderHook(() => useDomainFilter(undefined));

        expect(result.current.countries).toEqual([]);
        expect(result.current.classifications).toEqual([]);
        expect(result.current.subClassifications).toEqual([]);
    });
    
    it('should return distinct countries, classifications and subClassifications', () => {
        const domains = [
            'US_OK-WOK',
            'FR_NK-WOL',
            'US_OK-NPP',
            'EN_NK-NRP',
            'EN_BL-WOL',
        ];

        const {result} = renderHook(() => useDomainFilter(domains));

        expect(result.current.countries).toEqual(['US', 'FR', 'EN']);
        expect(result.current.classifications).toEqual(['OK', 'NK', 'BL']);
        expect(result.current.subClassifications).toEqual(['WOK', 'NPP', 'NRP']);
    });

    it('should handle duplicate domains correctly', () => {
        const domains = [
            'US_OK-WOK',
            'FR_NK-WOL',
            'US_OK-NPP',
            'EN_NK-NRP',
            'EN_BL-WOL',
            'US_OK-WOK',
            'FR_NK-WOL',
            'US_OK-NPP',
            'EN_NK-NRP',
            'EN_BL-WOL',
        ];

        const {result} = renderHook(() => useDomainFilter(domains));

        expect(result.current.countries).toEqual(['US', 'FR', 'EN']);
        expect(result.current.classifications).toEqual(['OK', 'NK', 'BL']);
        expect(result.current.subClassifications).toEqual(['WOK', 'NPP', 'NRP']);
        
    });
});