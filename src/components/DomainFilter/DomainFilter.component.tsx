import {useDomainFilter} from "../../hooks";
import {SelectDomainFilter} from "../SelectDomainFilter";

interface Props {
  domains?: string[]
}


const DomainFilter = ({ domains = [] }: Props) => {

  const {countries, classifications, subClassifications} = useDomainFilter(domains);

  return (
      <>
        <SelectDomainFilter name="countries" options={countries} />
        <SelectDomainFilter name="classifications" options={classifications} />
        <SelectDomainFilter name="subClassifications" options={subClassifications} />
      </>
  );
}

export default DomainFilter
