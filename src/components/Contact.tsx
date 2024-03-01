 
import des2 from "./images/im3.jpg"
const Contact = () => {
  return (
    <>
      <div className="bg-indigo-500" >
         
        <div>
          <form  role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div   aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <img
          src={des2}
          alt=""
          id="destImg"
          style={{ width: "100%", height: "93%" }}
        />
      </div>
    </>
  );
}
export default Contact;