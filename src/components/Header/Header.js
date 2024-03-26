import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="inlineHeader">
        <div className="leftLogo">
          <a href="/">
            <img
              src={require("../../assets/logo.png")}
              className="header_logo_img"
              alt="logo"
            />
            {/* <img src="https://www.samatapat.com/admin/uploads/setting/samapat-name6544c0aa348d2.png" className="logoText" alt="name"/> */}
            <span className="header_logo_name">Rushikul</span>
          </a>
        </div>
        <div className="rightNavBar">
          <ul>
            <li>
              <a href="https://www.samatapat.com/index.php">Home</a>
            </li>

            <li>
              <a href="https://www.samatapat.com/about.php">
                About Us <i class="fa fa-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="https://www.samatapat.com/chairman-message.php">
                    Chairman Message
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/board-of-director.php">
                    Board of Director
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/our-vision.php">
                    Our Vision
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/our-values.php">
                    Our Value
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/financial-position.php">
                    Financial Position
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/our-team.php">Our Team</a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/our-partners.php">
                    Our Partners
                  </a>
                </li>
                <li>
                  <a href="http://www.samataschool.in/">Our Venture</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">
                Deposits <i class="fa fa-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="https://www.samatapat.com/liquidity-base-protection-fund.php">
                    Samata Liquidity Base Protection Fund
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/terms-deposit.php">
                    Term Deposit
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/savings.php">Savings</a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/current.php">Current</a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/daily-deposit.php">
                    Daily Deposit
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/recurring-deposit.php">
                    Recuring
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">
                Loans <i class="fa fa-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="https://www.samatapat.com/personal-loan.php">
                    Personal Loan
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/vehical-loan.php">
                    Vehical Loan
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/gold-loan.php">
                    Gold Loan
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/business-loan.php">
                    Business Loan
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/property-loan.php">
                    Property Against Loan
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/fd-loan.php">FD Loan</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">
                Services <i class="fa fa-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="https://www.samatapat.com/mobile-banking.php">
                    Mobile Banking
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/money-transfer.php">
                    Money Transfer
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/locker.php">Locker</a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/micro-atm.php">
                    Micro ATM
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/paperless-banking.php">
                    Paper Less Banking
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="https://www.samatapat.com/head-office.php">
                Contact <i class="fa fa-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="https://www.samatapat.com/head-office.php">
                    Head Office
                  </a>
                </li>
                <li>
                  <a href="https://www.samatapat.com/branch-office.php">
                    Branches
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="https://www.samatapat.com/notice.php">Notice</a>
            </li>

            <li>
              <a href="#">
                Gallery <i class="fa fa-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="https://samatawarta.in/">News &amp; Updates</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="https://www.samatapat.com/career-step1.php">Careers</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Header;
