import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="grid grid-cols-1 tablet:grid-cols-2"
      style={{
        background: "#EDE9FD",
        padding: "32px 20px",
        alignItems: "flex-start",
      }}
    >
      <div className="tablet:order-1">
        <p
          style={{
            color: "#000",
            fontFamily: "Playfair Display",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          Awwficial Rentals
        </p>
        <p
          className="pt-4"
          style={{
            color: "#000",
            fontFamily: "Lato",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          Providing 360 photobooth experience in LA and the OC!
        </p>
      </div>
      <div className="tablet:order-2">
        <div className="pt-4 flex flex-wrap justify-between w-full">
          <Link href="">
            <p
              className="pr-2"
              style={{
                color: "#7E1F86",
                fontFamily: "Lato",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              Home
            </p>
          </Link>
          <Link href="">
            <p
              className="px-2"
              style={{
                color: "#7E1F86",
                fontFamily: "Lato",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              Services
            </p>
          </Link>
          <Link href="">
            <p
              className="px-2"
              style={{
                color: "#7E1F86",
                fontFamily: "Lato",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              Gallery
            </p>
          </Link>
          <Link href="">
            <p
              className="px-2"
              style={{
                color: "#7E1F86",
                fontFamily: "Lato",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              FAQ
            </p>
          </Link>
          <Link href="">
            <p
              className="px-2"
              style={{
                color: "#7E1F86",
                fontFamily: "Lato",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              Contact
            </p>
          </Link>
        </div>
        <div className="pt-4 tablet:max-w-sm">
          <button
            className="flex justify-center items-center w-full py-4 px-16 rounded-lg"
            style={{
              background: "var(--primary, #7E1F86)",
            }}
          >
            <p
              style={{
                color: "var(--icon-color, #FFF",
                textAlign: "center",
                fontFamily: "Lato",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
              }}
            >
              Book today
            </p>
          </button>
        </div>

        <div className="pt-4 flex flex-row gap-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20Z"
              fill="#1877F2"
            />
            <path
              d="M30 20C30 14.5 25.5 10 20 10C14.5 10 10 14.5 10 20C10 25 13.625 29.125 18.375 29.875V22.875H15.875V20H18.375V17.75C18.375 15.25 19.875 13.875 22.125 13.875C23.25 13.875 24.375 14.125 24.375 14.125V16.625H23.125C21.875 16.625 21.5 17.375 21.5 18.125V20H24.25L23.75 22.875H21.375V30C26.375 29.25 30 25 30 20Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20Z"
              fill="#F00073"
            />
            <path
              d="M20 11.5C22.75 11.5 23.125 11.5 24.25 11.5C25.25 11.5 25.75 11.75 26.125 11.875C26.625 12.125 27 12.25 27.375 12.625C27.75 13 28 13.375 28.125 13.875C28.25 14.25 28.375 14.75 28.5 15.75C28.5 16.875 28.5 17.125 28.5 20C28.5 22.875 28.5 23.125 28.5 24.25C28.5 25.25 28.25 25.75 28.125 26.125C27.875 26.625 27.75 27 27.375 27.375C27 27.75 26.625 28 26.125 28.125C25.75 28.25 25.25 28.375 24.25 28.5C23.125 28.5 22.875 28.5 20 28.5C17.125 28.5 16.875 28.5 15.75 28.5C14.75 28.5 14.25 28.25 13.875 28.125C13.375 27.875 13 27.75 12.625 27.375C12.25 27 12 26.625 11.875 26.125C11.75 25.75 11.625 25.25 11.5 24.25C11.5 23.125 11.5 22.875 11.5 20C11.5 17.125 11.5 16.875 11.5 15.75C11.5 14.75 11.75 14.25 11.875 13.875C12.125 13.375 12.25 13 12.625 12.625C13 12.25 13.375 12 13.875 11.875C14.25 11.75 14.75 11.625 15.75 11.5C16.875 11.5 17.25 11.5 20 11.5ZM20 9.625C17.125 9.625 16.875 9.625 15.75 9.625C14.625 9.625 13.875 9.875 13.25 10.125C12.625 10.375 12 10.75 11.375 11.375C10.75 12 10.5 12.5 10.125 13.25C9.875 13.875 9.75 14.625 9.625 15.75C9.625 16.875 9.625 17.25 9.625 20C9.625 22.875 9.625 23.125 9.625 24.25C9.625 25.375 9.875 26.125 10.125 26.75C10.375 27.375 10.75 28 11.375 28.625C12 29.25 12.5 29.5 13.25 29.875C13.875 30.125 14.625 30.25 15.75 30.375C16.875 30.375 17.25 30.375 20 30.375C22.75 30.375 23.125 30.375 24.25 30.375C25.375 30.375 26.125 30.125 26.75 29.875C27.375 29.625 28 29.25 28.625 28.625C29.25 28 29.5 27.5 29.875 26.75C30.125 26.125 30.25 25.375 30.375 24.25C30.375 23.125 30.375 22.75 30.375 20C30.375 17.25 30.375 16.875 30.375 15.75C30.375 14.625 30.125 13.875 29.875 13.25C29.625 12.625 29.25 12 28.625 11.375C28 10.75 27.5 10.5 26.75 10.125C26.125 9.875 25.375 9.75 24.25 9.625C23.125 9.625 22.875 9.625 20 9.625Z"
              fill="white"
            />
            <path
              d="M20 14.625C17 14.625 14.625 17 14.625 20C14.625 23 17 25.375 20 25.375C23 25.375 25.375 23 25.375 20C25.375 17 23 14.625 20 14.625ZM20 23.5C18.125 23.5 16.5 22 16.5 20C16.5 18.125 18 16.5 20 16.5C21.875 16.5 23.5 18 23.5 20C23.5 21.875 21.875 23.5 20 23.5Z"
              fill="white"
            />
            <path
              d="M25.5 15.75C26.1904 15.75 26.75 15.1904 26.75 14.5C26.75 13.8096 26.1904 13.25 25.5 13.25C24.8096 13.25 24.25 13.8096 24.25 14.5C24.25 15.1904 24.8096 15.75 25.5 15.75Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20Z"
              fill="#E60023"
            />
            <path
              d="M20 10C14.5 10 10 14.5 10 20C10 24.125 12.5 27.625 16 29.125C16 28.375 16 27.625 16.125 26.875C16.375 26 17.375 21.375 17.375 21.375C17.375 21.375 17 20.75 17 19.75C17 18.25 17.875 17.125 18.875 17.125C19.75 17.125 20.25 17.75 20.25 18.625C20.25 19.5 19.625 20.875 19.375 22.125C19.125 23.125 19.875 24 21 24C22.875 24 24.125 21.625 24.125 18.625C24.125 16.375 22.625 14.75 20 14.75C17 14.75 15.125 17 15.125 19.5C15.125 20.375 15.375 21 15.75 21.5C15.875 21.75 16 21.75 15.875 22C15.875 22.125 15.75 22.625 15.625 22.75C15.5 23 15.375 23.125 15.125 23C13.75 22.375 13.125 20.875 13.125 19.125C13.125 16.25 15.5 12.875 20.25 12.875C24.125 12.875 26.625 15.625 26.625 18.625C26.625 22.5 24.5 25.5 21.25 25.5C20.125 25.5 19.125 24.875 18.75 24.25C18.75 24.25 18.125 26.5 18 27C17.75 27.75 17.375 28.5 17 29.125C17.875 29.375 18.875 29.5 19.875 29.5C25.375 29.5 29.875 25 29.875 19.5C30 14.5 25.5 10 20 10Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
