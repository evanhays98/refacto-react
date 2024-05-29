import {useDomainFilter} from "../../hooks";



interface Props {
  domains?: string[]
}

const DomainFilter = ({ domains = [] }: Props) => {

  const {countries, classifications, subClassifications} = useDomainFilter(domains);


  return (<>
    <select name="countries" multiple>
      {countries.map(country => (
        <option value={country} key={country}>{country}</option>
      ))}
    </select>
    <select name="classifications" multiple>
      {classifications.map(classification => (
        <option value={classification} key={classification}>{classification}</option>
      ))}
    </select>
    <select name="subClassifications" multiple>
      {subClassifications.map(subClassification => (
        <option value={subClassification} key={subClassification}>{subClassification}</option>
      ))}
    </select>
  </>);
}

export default DomainFilter
