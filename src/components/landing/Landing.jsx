import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@/components/Button";

const Landing = () => {
  return (
    <Row className="flex justify-center items-center h-screen w-screen text-center">
      <Col xl={8}>
        <div className="w-3/4 items-center mb-12 text-4xl inline-block text-left text-code-white">
          <div>Hello World!</div>
          <div className="text-8xl font-bold py-5 leading-normal">
            Introducing Apollo
          </div>
          <div>
            An educational tool for{" "}
            <span className="text-code-pink">beginners</span> in computer
            science to practice their fundamentals!
          </div>
        </div>
      </Col>
      <Col xl={3}>
        <div className="flex justify-end">
          <Button text="Get Started" color="lime" />
        </div>
      </Col>
      <Col xl={1}></Col>
    </Row>
  );
};

export default Landing;
