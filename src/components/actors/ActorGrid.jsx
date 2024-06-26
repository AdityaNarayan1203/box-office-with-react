import {FlexGrid} from '../common/FlexGrid'
import ActorCard from "./ActorCard"

const ActorGrid = ({actors}) =>{
  return (<FlexGrid>
    {actors.map(data => (
     
      <ActorCard key={data.person.id} 
                name={data.person.name} 
                country={data.person.country ? data.person.country.name : null}
                birthday={data.person.birthday}
                gender={data.person.gender}
                deathday={data.person.deathday}
                image={data.person.image ? data.person.image.medium : '/not-found-image.png'}></ActorCard>
    ))}
   </FlexGrid>)
 }
 
 export default ActorGrid