import clouds from "../../public/icons/clouds.svg";
import { RiTempColdLine } from "react-icons/ri";

export default function WeatherSection() {
  return (
    <div>
      <div>
        <img src={clouds} alt="clouds" />
        <h2>
          20
          <span>
            <RiTempColdLine />
          </span>
        </h2>
        <p>Partly cloudly</p>
      </div>

      <div>
        <ul>
            <li>
                <p></p>
            </li>
        </ul>
      </div>

    </div>
  );
}
