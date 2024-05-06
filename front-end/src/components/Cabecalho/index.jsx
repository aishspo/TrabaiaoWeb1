import styled from "styled-components";
import logo from "./assets/Logo.png";

const CabecalhoEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  padding: 2em 4em;
  background-color: #76012f;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 0.1;
`;

const LinkEstilizado = styled.a`
  font-weight: 700;
`;

function Cabecalho() {
  return (
    <CabecalhoEstilizado>
      <img src={logo} alt="Logo de Sistema Acadêmico Geral Universitário" />
      <Container>
        <LinkEstilizado href="#">
          <svg
            width="36"
            height="34"
            viewBox="0 0 36 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4286 33.0714H20.5714"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.2857 13.7857C28.2857 11.0578 27.2021 8.44157 25.2731 6.51261C23.3441 4.58368 20.7279 3.5 18 3.5C15.272 3.5 12.6558 4.58368 10.7269 6.51261C8.79794 8.44157 7.71426 11.0578 7.71426 13.7857V22.7857C7.71426 23.8087 7.30787 24.7899 6.58453 25.5132C5.86118 26.2366 4.88008 26.6429 3.85712 26.6429H32.1428C31.1199 26.6429 30.1387 26.2366 29.4153 25.5132C28.692 24.7899 28.2857 23.8087 28.2857 22.7857V13.7857Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.28571 13.4514C1.28709 11.0038 1.87079 8.59163 2.98861 6.41414C4.10641 4.23665 5.72623 2.35637 7.71428 0.928589"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M34.7143 13.4514C34.713 11.0038 34.1293 8.59163 33.0115 6.41414C31.8937 4.23665 30.2737 2.35637 28.2857 0.928589"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </LinkEstilizado>

        <LinkEstilizado>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_141_21)">
              <path
                d="M10.6578 33.0195C12.8741 34.1049 15.3659 34.7143 18 34.7143C27.2312 34.7143 34.7143 27.2312 34.7143 18.0001C34.7143 8.76901 27.2312 1.28577 18 1.28577C8.76895 1.28577 1.28571 8.76901 1.28571 18.0001C1.28571 21.4268 2.3169 24.6126 4.08589 27.2641M10.6578 33.0195L1.28571 34.7143L4.08589 27.2641M10.6578 33.0195L10.6714 33.0172M4.08589 27.2641L4.08856 27.2572"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_141_21">
                <rect width="36" height="36" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </LinkEstilizado>

        <LinkEstilizado>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4487 5.78577L14.5544 2.93148C14.7409 2.44822 15.069 2.03254 15.4957 1.73888C15.9224 1.44523 16.4278 1.2873 16.9458 1.28577H19.0544C19.5724 1.2873 20.0779 1.44523 20.5046 1.73888C20.9313 2.03254 21.2593 2.44822 21.4458 2.93148L22.5515 5.78577L26.3057 7.94577L29.34 7.48291C29.8453 7.41433 30.3596 7.49749 30.8176 7.72185C31.2753 7.9462 31.6561 8.3016 31.9114 8.74291L32.94 10.5429C33.2036 10.9912 33.3252 11.5089 33.2884 12.0277C33.2517 12.5465 33.0586 13.0419 32.7343 13.4486L30.8572 15.8401V20.1601L32.7857 22.5515C33.11 22.9582 33.3031 23.4536 33.3399 23.9724C33.3766 24.4912 33.255 25.0089 32.9914 25.4572L31.9629 27.2572C31.7075 27.6985 31.3267 28.0538 30.869 28.2783C30.411 28.5025 29.8967 28.5859 29.3914 28.5172L26.3572 28.0543L22.603 30.2143L21.4973 33.0686C21.3108 33.5518 20.9827 33.9676 20.556 34.2613C20.1293 34.5549 19.6238 34.7128 19.1058 34.7143H16.9458C16.4278 34.7128 15.9224 34.5549 15.4957 34.2613C15.069 33.9676 14.7409 33.5518 14.5544 33.0686L13.4487 30.2143L9.6944 28.0543L6.66011 28.5172C6.15488 28.5859 5.64065 28.5025 5.18278 28.2783C4.72493 28.0538 4.34411 27.6985 4.08869 27.2572L3.06011 25.4572C2.79654 25.0089 2.67512 24.4912 2.71184 23.9724C2.74856 23.4536 2.94173 22.9582 3.26583 22.5515L5.14297 20.1601V15.8401L3.2144 13.4486C2.8903 13.0419 2.69713 12.5465 2.66041 12.0277C2.62369 11.5089 2.74511 10.9912 3.00869 10.5429L4.03726 8.74291C4.29268 8.3016 4.67351 7.9462 5.13135 7.72185C5.58922 7.49749 6.10345 7.41433 6.60869 7.48291L9.64297 7.94577L13.4487 5.78577ZM12.8573 18.0001C12.8573 19.0172 13.1589 20.0115 13.724 20.8573C14.2891 21.703 15.0923 22.3622 16.032 22.7514C16.9718 23.1407 18.0058 23.2425 19.0034 23.0441C20.001 22.8457 20.9174 22.3558 21.6367 21.6366C22.3559 20.9174 22.8457 20.001 23.0442 19.0034C23.2426 18.0058 23.1408 16.9717 22.7515 16.032C22.3623 15.0922 21.7031 14.289 20.8573 13.7239C20.0116 13.1588 19.0173 12.8572 18.0001 12.8572C16.6362 12.8572 15.328 13.399 14.3636 14.3635C13.3991 15.328 12.8573 16.6361 12.8573 18.0001Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </LinkEstilizado>
      </Container>
    </CabecalhoEstilizado>
  );
}

export default Cabecalho;
