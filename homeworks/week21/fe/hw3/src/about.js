/* eslint-disable */

import React, { useState } from 'react';

function About() {
  const [myName] = useState('Cian');
  const [myPicURL] = useState('https://picsum.photos/id/104/600/800');
  const [aboutMe] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio illum quibusdam vel beatae voluptatum officiis neque qui ipsum reiciendis voluptatem dolor expedita eveniet commodi eum quae harum ducimus cumque enim a, esse voluptas! Distinctio nulla veritatis laboriosam dicta est, eos, inventore dignissimos odit reiciendis ex ut hic odio provident repellendus atque nobis repudiandae iste doloribus maiores rerum corporis! Sapiente pariatur id dolorum cum alias accusamus aut quod aperiam. Accusamus molestiae expedita error omnis suscipit dolor fugit sed perferendis, laboriosam excepturi officia maiores asperiores animi recusandae explicabo porro tempore soluta.');
  const [myPassion] = useState(' Ut praesentium vel in voluptate iure! Quia nostrum iure iusto maiores ipsum accusantium aspernatur natus quis voluptates obcaecati, vero neque corporis enim accusamus nulla, labore dicta iste dignissimos! Id, nemo facilis eos et beatae maxime incidunt cum dolore nesciunt mollitia corrupti, possimus sunt aperiam nobis pariatur quisquam aliquam aspernatur deleniti perspiciatis impedit, ut consectetur deserunt? Esse modi sunt magnam corrupti cumque ex aut rerum dolorem, quae consequatur est similique numquam possimus quas eaque labore tempore cupiditate vero facilis atque aliquid praesentium maxime? Quidem et praesentium sed, alias fugiat, aspernatur officiis nostrum id itaque nulla ratione. Quo eos velit doloremque tempora, qui sint! Tempora id minus quia perspiciatis. Nihil corrupti recusandae neque.');
  return (
    <div className="intro-wrapper">
      <div className="intro">
        <div className="about-me">{aboutMe}</div>
        <img src={myPicURL} />
        <div className="passion">{myPassion}</div>
      </div>
      <h3>
Enjoy Here. 
{' '}
{myName}
      </h3>
    </div>
  );
}

export default About;
