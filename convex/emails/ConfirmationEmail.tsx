import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";
import { Doc } from "../_generated/dataModel";

type ConfirmationEmailProps = {
  order: Doc<"orders">;
  orderId: string;
  appUrl: string;
};

export default function ConfirmationEmail({
  order,
  orderId,
  appUrl,
}: ConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your Audiophile Order Confirmation ({orderId})</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thanks for your order!</Heading>

          <Text style={text}>
            Hi {order.customerName},
          </Text>
          <Text style={text}>
            We're preparing your order ({orderId}) for shipment. We'll notify you
            once it's on its way.
          </Text>

          <Section style={box}>
            <Heading as="h2" style={h2}>Order Summary</Heading>
            {order.items.map((item) => (
              <Row key={item.productId}>
                <Column>
                  <Text style={itemText}>
                    {item.shortName} <strong>(x{item.quantity})</strong>
                  </Text>
                </Column>
                <Column align="right">
                  <Text style={itemText}>
                    $ {(item.price * item.quantity).toLocaleString()}
                  </Text>
                </Column>
              </Row>
            ))}

            <Row style={totalRow}>
              <Column><Text style={totalText}>Grand Total</Text></Column>
              <Column align="right"><Text style={totalText}>$ {order.grandTotal.toLocaleString()}</Text></Column>
            </Row>
          </Section>

          <Section style={box}>
            <Heading as="h2" style={h2}>Shipping Details</Heading>
            <Text style={text}>
              {order.shippingAddress}
              <br />
              {order.shippingCity}, {order.shippingZip}
              <br />
              {order.shippingCountry}
            </Text>
          </Section>

          <Button 
            style={button} 
            href={`${appUrl}/confirmation/${orderId}`}
          >
            View Your Order
          </Button>

          <Text style={footer}>
            Audiophile E-commerce, 123 Music Lane, New York, NY 10001
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f1f1f1",
  fontFamily: "Manrope, sans-serif",
};
const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  backgroundColor: "#ffffff",
};
const box = {
  padding: "0 48px",
};
const h1 = {
  ...box,
  color: "#D87D4A",
  fontSize: "32px",
  fontWeight: "bold",
  textAlign: "center" as const,
};
const h2 = {
  fontSize: "20px",
  fontWeight: "bold",
};
const text = {
  color: "#000",
  fontSize: "15px",
  lineHeight: "25px",
};
const itemText = { ...text, fontSize: "14px" };
const totalRow = { borderTop: "1px solid #979797", marginTop: "16px", paddingTop: "16px" };
const totalText = { ...text, fontSize: "16px", fontWeight: "bold" };
const button = {
  backgroundColor: "#D87D4A",
  borderRadius: "4px",
  color: "#fff",
  fontSize: "13px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "12px",
  textTransform: "uppercase" as const,
};
const footer = {
  ...box,
  color: "#000",
  opacity: 0.5,
  fontSize: "12px",
  paddingTop: "24px",
  borderTop: "1px solid #979797",
};