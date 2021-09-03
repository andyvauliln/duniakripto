import React from 'react';
import styled from 'styled-components';

const Logo = ({ width = '5em', height = '3em', ...props }) => {
  return (
    <LogoSvg {...props} width={width} height={height} viewBox="0 0 60 32" version="1.1">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M25,16.9678068 L26.3069662,16.9678068 C26.4594456,18.1113347 27.5050186,18.804829 29.0080297,18.804829 C30.4311707,18.804829 31.4622218,18.0449363 31.4622218,16.9973172 C31.4622218,16.1046278 30.881348,15.5144199 29.4291633,15.1898055 L28.2674155,14.9315895 C26.1690087,14.4668008 25.2613932,13.5003353 25.2613932,11.9879276 C25.2613932,10.232059 26.7861872,9 28.9572033,9 C31.0483492,9 32.5586213,10.268947 32.6167087,12.0764588 L31.3097425,12.0764588 C31.1935677,10.9107981 30.2859522,10.195171 28.9208986,10.195171 C27.6139324,10.195171 26.6046641,10.8443997 26.6046641,11.9289068 C26.6046641,12.7699531 27.1637552,13.3454058 28.5941571,13.6626425 L29.7559048,13.9208585 C31.9414428,14.40778 32.8054927,15.2930919 32.8054927,16.7981221 C32.8054927,18.767941 31.2806988,20 28.9354205,20 C26.6482296,20 25.1234357,18.804829 25,16.9678068 Z M35.2843719,10.2984574 L36.5477726,10.2984574 L36.5477726,12.1502347 L38.0144791,12.1502347 L38.0144791,13.2052314 L36.5477726,13.2052314 L36.5477726,17.7645875 C36.5477726,18.4654594 36.8382095,18.7826962 37.4844317,18.7826962 C37.6296502,18.7826962 37.9200871,18.7605634 38.0072182,18.7458082 L38.0072182,19.8229376 C37.8547388,19.8598256 37.5062145,19.8819584 37.2085166,19.8819584 C35.8216803,19.8819584 35.2843719,19.3065057 35.2843719,17.8309859 L35.2843719,13.2052314 L34.1589288,13.2052314 L34.1589288,12.1502347 L35.2843719,12.1502347 L35.2843719,10.2984574 Z M42.1633708,19.9557344 C40.6603596,19.9557344 39.6510913,19.0335345 39.6510913,17.6539235 C39.6510913,16.3407109 40.6458378,15.5144199 42.3884594,15.4111335 L44.5522146,15.2857143 L44.5522146,14.6438632 C44.5522146,13.7069081 43.942297,13.1462106 42.896724,13.1462106 C41.9237603,13.1462106 41.3138427,13.6109993 41.1541024,14.3635144 L39.9342673,14.3635144 C40.0213984,13.0355466 41.1395806,12.017438 42.9257677,12.017438 C44.6974331,12.017438 45.8156153,12.991281 45.8156153,14.518444 L45.8156153,19.8229376 L44.6175629,19.8229376 L44.6175629,18.5023474 L44.5885192,18.5023474 C44.1383419,19.3802817 43.1799001,19.9557344 42.1633708,19.9557344 Z M42.4465468,18.8638498 C43.6373382,18.8638498 44.5522146,18.0154259 44.5522146,16.908786 L44.5522146,16.2816901 L42.5336779,16.4071093 C41.5171486,16.4735077 40.9362747,16.9309188 40.9362747,17.6539235 C40.9362747,18.3843058 41.5389314,18.8638498 42.4465468,18.8638498 Z M48.5704096,10.2984574 L49.8338103,10.2984574 L49.8338103,12.1502347 L51.3005168,12.1502347 L51.3005168,13.2052314 L49.8338103,13.2052314 L49.8338103,17.7645875 C49.8338103,18.4654594 50.1242472,18.7826962 50.7704694,18.7826962 C50.9156879,18.7826962 51.2061248,18.7605634 51.2932559,18.7458082 L51.2932559,19.8229376 C51.1407765,19.8598256 50.7922522,19.8819584 50.4945543,19.8819584 C49.1077179,19.8819584 48.5704096,19.3065057 48.5704096,17.8309859 L48.5704096,13.2052314 L47.4449665,13.2052314 L47.4449665,12.1502347 L48.5704096,12.1502347 L48.5704096,10.2984574 Z M53.2566096,14.2676056 C53.2566096,12.954393 54.3965746,12.017438 56.0302823,12.017438 C57.6857729,12.017438 58.7894332,13.0060362 58.8402597,14.3635144 L57.6349464,14.3635144 C57.5405544,13.5593561 56.9596805,13.065057 56.0302823,13.065057 C55.108145,13.065057 54.4982275,13.5298457 54.4982275,14.2012072 C54.4982275,14.7323944 54.8830564,15.0938967 55.7253235,15.3004695 L56.9233759,15.5955734 C58.4481698,15.971831 59,16.5767941 59,17.6760563 C59,19.0114017 57.7583821,19.9557344 56.0738479,19.9557344 C54.3021825,19.9557344 53.1985222,19.0482897 53.0533037,17.6096579 L54.3167044,17.6096579 C54.4691838,18.4875922 55.0500577,18.9081154 56.0738479,18.9081154 C57.0976381,18.9081154 57.7293384,18.4654594 57.7293384,17.7719651 C57.7293384,17.2186452 57.4316405,16.9014085 56.5675907,16.6874581 L55.3695383,16.3923541 C53.9463973,16.045607 53.2566096,15.3742455 53.2566096,14.2676056 Z"
          fillRule="nonzero"
        ></path>
        <path d="M4,10.5 L-1.0658141e-14,10.5 L-1.0658141e-14,9 L4,9 L4,0 L6.21582734,0 L6.43624947,17.0645793 C6.47159033,19.8005879 8.69959555,22 11.4358324,22 L14,22 L14,23.5 L11,23.5 C7.13400675,23.5 4,20.3659932 4,16.5 L4,10.5 Z M9,9 L18,9 L16,15 L16.1763426,15 C20.8171239,15 24,18.5 24,23.5 C24,28.5 20.5,32 15.5,32 L12.5,32 C9.19423804,32 5.5,29.5 5.5,26 L7.5,26 C7.5,28 9.95710619,30.5 12.5,30.5 L15.5,30.5 C19.3779131,30.5 22,27.5 22,23.5 C22,19.5 18.8733898,16.5 15,16.5 L13.5,16.5 L15.5,10.5 L9,10.5 L9,9 Z"></path>
      </g>
    </LogoSvg>
  );
};

const LogoSvg = styled.svg`
  ${props => {
    props.variant = props.variant || 'inherit';
    return '';
  }}
  & path {
    fill: ${props => (props.variant === 'inherit' ? 'currentColor' : 'var(--dark-label-color')};
  }
`;

export default Logo;
