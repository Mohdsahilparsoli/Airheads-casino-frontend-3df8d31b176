import React from 'react';
import "../../styles/Footer.scss";

import astropay from "../../assets/payments/astropay.svg";
import ecopayz from "../../assets/payments/ecopayz.svg";
import flexepin from "../../assets/payments/flexepin.svg";
import jetonVoucher from "../../assets/payments/jetonVoucher.svg";
import jetonWallet from "../../assets/payments/jetonWallet.svg";
import neteller from "../../assets/payments/neteller.svg";
import paysafecard from "../../assets/payments/paysafecard.svg";
import perfectmoney from "../../assets/payments/perfectmoney.svg";
import rapidTransfer from "../../assets/payments/rapidTransfer.svg";
import skrill from "../../assets/payments/skrill.svg";
import trustlyCde from "../../assets/payments/trustlyCde.svg";
import visa from "../../assets/payments/visa.svg";
import webmoney from "../../assets/payments/webmoney.svg";
import yandex from "../../assets/payments/yandex.svg";

const Payments = () => {
  return (
    <>
      <a className="payment" href="#">
        <img src={astropay} alt="astropay" />
      </a>

      <a className="payment" href="#">
        <img src={ecopayz} alt="ecopayz" />
      </a>

      <a className="payment" href="#">
        <img src={flexepin} alt="flexepin" />
      </a>

      <a className="payment" href="#">
        <img src={jetonVoucher} alt="jetonVoucher" />
      </a>

      <a className="payment" href="#">
        <img src={jetonWallet} alt="jetonWallet" />
      </a>

      <a className="payment" href="#">
        <img src={neteller} alt="neteller" />
      </a>

      <a className="payment" href="#">
        <img src={paysafecard} alt="paysafecard" />
      </a>

      <a className="payment" href="#">
        <img src={perfectmoney} alt="perfectmoney" />
      </a>

      <a className="payment" href="#">
        <img src={rapidTransfer} alt="rapidTransfer" />
      </a>

      <a className="payment" href="#">
        <img src={skrill} alt="skrill" />
      </a>

      <a className="payment" href="#">
        <img src={trustlyCde} alt="trustlyCde" />
      </a>

      <a className="payment" href="#">
        <img src={visa} alt="visa" />
      </a>

      <a className="payment" href="#">
        <img src={webmoney} alt="webmoney" />
      </a>

      <a className="payment" href="#">
        <img src={yandex} alt="yandex" />
      </a>
    </>
  );
}

export default Payments;
