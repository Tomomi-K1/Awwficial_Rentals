import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import Box from "@mui/material/Box";

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none",
        },
        ".expandIconWrapper": {
          display: "none",
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block",
        },
      }}
    >
      <div className="expandIconWrapper">
        <RemoveSharpIcon />
      </div>
      <div className="collapsIconWrapper">
        <AddSharpIcon />
      </div>
    </Box>
  );
};

export default function FAQs() {
  const arrOfQuestions = [
    {
      q: `Why Choose Aww-ficial Photo Booth Rentals Over Others?`,
      a: `At Awwficial Photo Booth Rentals, we're not just capturing photos; we're creating immersive experiences. What makes us truly unique is our commitment to providing not just a service but an experience that will be talked about long after your event. 
      We bring innovation, excitement, and boundless creativity to your celebrations. Our friendly and energetic team goes above and beyond to ensure your event is nothing short of exceptional. 
      Choose us, and you're not just choosing a photo booth; you're choosing a memory-making partner, an entertainment source, and a guaranteed crowd-pleaser.`,
      id: 1,
    },
    {
      q: `Why Do I Need A Photo Booth For My Event?`,
      a: `A photo booth adds an interactive and entertaining element to your event. It captures candid moments, provides keepsakes for guests, and creates a fun atmosphere that enhances the overall experience.`,
      id: 2,
    },
    {
      q: `What Time Do You Arrive For Setup And How Long Does It To Break Down?`,
      a: `We typically need 1 hour before for set up and 1 hour for break down to ensure a seamless process.`,
      id: 3,
    },
    {
      q: `What Are The Necessary Requirements For The Venue Where The Event Is Held?`,
      a: `We require a space with flat ground, 10x10 area for the photo booth (13x13 preferred), Wi-Fi (strongly recommended but not necessary), and an outlet (10 amps, 3 prong) within 20 feet of the photo booth.`,
      id: 4,
    },
    {
      q: `Can The Photo Booth Be Outdoors?`,
      a: `Yes, our photo booth can be set up outdoors, weather permitting. An outlet is required within 20 feet of the photo booth.`,
      id: 5,
    },
    {
      q: `How Do I Get The Digital Copy?`,
      a: `We provide immediate access to your videos via airdrop, QR code, or text right after recording. Additionally, within 2-3 business days following your event, you'll receive a download link for all your digital copies. 
      If you ever need extra copies, simply let us know as we retain them for a limited time.`,
      id: 6,
    },
    {
      q: `Do You Need A Deposit And When Is The Remaining Balance Due?`,
      a: `Yes, we require a  non-refundable deposit of $100 to secure your booking. The remaining balance is due on the day of the event before it starts.`,
      id: 7,
    },
    {
      q: `How Do I Get The Digital Copy?`,
      a: `We provide immediate access to your videos via airdrop, QR code, or text right after recording. Additionally, within 2-3 business days following your event, you'll receive a download link for all your digital copies. 
      If you ever need extra copies, simply let us know as we retain them for a limited time.`,
      id: 8,
    },
    {
      q: `What Type Of Payment Do You Accept?`,
      a: `We accept various payment methods, including cash, check, Venmo, and Zelle.`,
      id: 9,
    },
    {
      q: `Does The Price Include All Taxes And Fees? Is there a travel fee? `,
      a: `Our pricing typically includes all taxes and fees. Any additional charges will be discussed upfront. The first 35 miles are included in the price. There will be a charge for anything past 35 miles.`,
      id: 10,
    },
    {
      q: `Do You Have Insurance?`,
      a: `Yes, we have liability insurance to ensure peace of mind during your event.`,
      id: 11,
    },
    {
      q: `What Is The Booking Process?`,
      a: `Contact us to check availability, review & sign the contract, pay the deposit, and secure your date.`,
      id: 12,
    },
    {
      q: `What Is Your Cancellation Policy?`,
      a: `Our cancellation policy is in the contract. Please review it for details.`,
      id: 13,
    },
    {
      q: `Is It Possible To Extend The Rental Of The Photo Booth During The Event?`,
      a: `Yes, if you wish to extend the rental, just let us know during the event.`,
      id: 14,
    },
    {
      q: `Do You Have Discounts For Regular Customers And Affiliate Programs?`,
      a: `We offer discounts for repeat customers and may have affiliate programs. Contact us for details.`,
      id: 15,
    },
  ];
  return (
    <div className="p-4 mx-auto max-w-[1600px] pb-32">
      <p
        className="text-center py-4"
        style={{
          fontFamily: "Playfair Display",
          fontSize: "36px",
          fontWeight: "400",
          lineHeight: "normal",
        }}
      >
        FAQ
      </p>
      {arrOfQuestions.map((item) => {
        return (
          <Accordion
            className="py-2"
            key={`${item.id}`}
            sx={{
              width: "100%",
              boxShadow: "none",
              "&:before": {
                display: "none",
              },
              "& .MuiAccordionSummary-root": {
                backgroundColor: "#FFF",
                border: "2px solid #740E94",
                borderRadius: "40px", // Rounded corners on all sides when not expanded
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                },
                "&.Mui-expanded": {
                  backgroundColor: "#EEC3FB",
                  borderBottom: "none",
                  borderRadius: "40px 40px 0 0", // Keep top corners rounded when expanded
                  minHeight: 56,
                },
              },
              "& .MuiAccordionDetails-root": {
                borderRadius: "0 0 40px 40px", // Rounded corners on the bottom
                border: "2px solid #740E94",
                borderTop: "none",
                background: "#EEC3FB",
                paddingTop: "0", // Adjust padding if necessary
              },
              "& .Mui-expanded": {
                "& > .MuiAccordionSummary-root": {
                  borderRadius: "40px 40px 0 0", // Keep top corners rounded on expand
                },
                "& + .MuiCollapse-container": {
                  "& .MuiAccordionDetails-root": {
                    borderTop: "none", // Ensures there's no border on top of details
                  },
                },
              },
            }}
          >
            <AccordionSummary
              expandIcon={<CustomExpandIcon />}
              aria-controls={`panel${item.id}a-content`}
              id={`panel${item.id}a-header`}
            >
              <Typography
                sx={{
                  color: "#000",
                  fontFamily: "Playfair Display",
                  fontSize: "32px",
                  fontWeight: "600",
                }}
              >
                {item.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "23px",
                  fontWeight: "400",
                }}
              >
                {item.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
