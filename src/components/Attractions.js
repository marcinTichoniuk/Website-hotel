import React from 'react';
import { FaMagic, FaTheRedYeti, FaVial } from 'react-icons/fa';
import Title from './Title';

const services = [
  { icon: <FaMagic />, title: 'Magic Practice', info: 'How about a magic trick? That is the thing with magic. You haveve got to know it is still here, all around us, or it just stays invisible for you.' },
  { icon: <FaVial />, title: 'Alchemy', info: 'Do you like alchemy? An old alchemist gave the following consolation to one of his disciples: “No matter how isolated you are and how lonely you feel, if you do your work truly and conscientiously, unknown friends will come and seek you.' },
  { icon: <FaTheRedYeti />, title: 'Hunting Yeti', info: 'Have you ever seen Yeti? Listen to me. Love is a Yeti. It is bigger than you and frightening and terrible. It makes loud and vicious noises. It is hungry all the time. It has horns and teeth and the force of its fists is more than anyone can bear. It speeds up time and slows it down. And it has its own aims and missions that those who are lucky enough to see it cannot begin to guess.' },
]

const Attractions = () => {

  const attractions = services.map(service => (
    <li className="section__item" key={service.title}>
      <div className="section__icon">{service.icon}</div>
      <h4 className="section__item-title">{service.title}</h4>
      <p className="section__text">{service.info}</p>
    </li>
  ))

  return (
    <section className="section">
      <Title title="Attractions" />
      <div className="section__services">
        <ul className="section__list">
          {attractions}
        </ul>
      </div>
    </section>
  );
}

export default Attractions;