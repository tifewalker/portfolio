import data from "../../data/index.json";

export default function Technologies() {
  return (
       <section className="technologies--section" id="mySkills">
         <div className="portfolio--container">
           <p className="sub--title">Technologies</p>
           <h2 className="sections--heading">Technology Stacks</h2>
         </div>
         <div className="technologies--section--container">
           <img src="./img/tech/react.png" width={150} height={150} />
           <img src="./img/tech/node.png" width={150} height={150} />
           <img src="./img/tech/mui.png" width={150} height={150} />
           <img src="./img/tech/wordpress.png" width={150} height={150} />
           <img src="./img/tech/mongodb.png" width={150} height={150} />
           <img src="./img/tech/photoshop.png" width={150} height={150} />
           <img src="./img/tech/after-effect.png" width={150} height={150}/>
           <img src="./img/tech/ubuntu.png" width={150} height={150} />           
         </div>
         <div className="technologies--section--container">
           <img src="./img/tech/bootstrap.png" width={150} height={150} />
           <img src="./img/tech/css.png" width={150} height={150} />
           <img src="./img/tech/html.png" width={150} height={150} />
           <img src="./img/tech/jquery.png" width={150} height={150} />
           <img src="./img/tech/mysql.png" width={150} height={150} />
           <img src="./img/tech/php.png" width={150} height={150} />
           <img src="./img/tech/typescript.png" width={150} height={150} />
           <img src="./img/tech/tailwind.png" width={150} height={150} />           
         </div>
       </section>
     );
}
