import React from "react";
import { TbArrowBadgeRightFilled,TbArrowBadgeRight,TbBadge,TbLetterB } from "react-icons/tb";
import { PiBracketsAngleThin } from "react-icons/pi";
function FooterContainer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-left">
          <div>
            <p class="footlogo1">
              <TbArrowBadgeRightFilled />
            </p>
            <p>Product</p>
          </div>
          <div>
            <p class="footlogo2">
              <TbArrowBadgeRight />
            </p>
            <p>Sub-Group</p>
          </div>
          <div>
            <p class="footlogo3">
              <PiBracketsAngleThin />
            </p>
            <p>Category</p>
          </div>
          <div>
            <p class="footlogo4">
              <TbLetterB/>
            </p>
            <p>Parent-Brand</p>
          </div>
          <div>
            <p class="footlogo5">
              <TbBadge />
            </p>
            <p>Sub-Brand</p>
          </div>
         
        </div>
        <div className="footer-right">
            <div>
                <div><p>Target</p><p>240</p></div>
            </div>
            <div>
                <div><p>Margin</p><p>23%</p></div>
            </div>
            <div>
                <div><p>Cost.</p><p>54%</p></div>
            </div>
            <div>
                <div><p>Budget</p><p>34%</p></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FooterContainer;
