import React from "react";
import faker from 'faker'
import styled, { css } from "styled-components";
import layout from "../layout";
const { Heading, Container, Button, Link, Flex, Column, Card } = layout;

const ButtonSample = () => {
	return (
		<div>
			<Container>
				<Heading>Button & Link</Heading>
				<p style={{ fontSize: "1.6rem" }}>
					Note: the button with loading dots receives a props value of "loading" {"<Button loading />"} which is usually best utilized by setting that loading attribute to some value set in state that evaluates to a truthy or falsy value (i.e., onSubmit sets state isLoading to true, then the button will load!)
				</p>
			</Container>
			<Container>
				<Button>Primary Button</Button>
				<Button secondary>Secondary Button</Button>
				<Button loading>Primary Loading Button</Button>
				<Link>Primary Link</Link>
				<Link secondary>Secondary Link</Link>
			</Container>
		</div>
	)
};

const ContainerSample = () => {
	return (
		<div>
			<Container>
				<Heading>Container</Heading>

			</Container>
			<Container style={{ backgroundColor: "var(--pDarker)" }}>
				<div style={{ height: 300, backgroundColor: "var(--pLightest)" }}>
					<Heading h2>Default Container {"<Container />"}</Heading>
				</div>
			</Container>
			<Container fullVertical style={{ backgroundColor: "var(--pBase)" }}>
				<div style={{ height: 300, backgroundColor: "var(--pLight)" }}>
					<Heading h2>Full Vertical Container {"<Container fullVertical />"}</Heading>
				</div>
			</Container>
			<Container full style={{ backgroundColor: "var(--pDarker)" }}>
				<div style={{ height: 300, backgroundColor: "var(--pLightest)" }}>
					<Heading h2>Full Container {"<Container full />"}</Heading>
				</div>
			</Container>
			{/* <Container full small style={{ backgroundColor: "var(--pBase)" }}>
				<div style={{ height: 300, backgroundColor: "var(--pLight)" }}>
					<Heading h2>Full Small Container {"<Container full small />"}</Heading>
				</div>
			</Container> */}
		</div>
	)
};

const FlexChild = styled.div`
	height: 100px;
	width: 100px;
	border-radius: 50%;
	background-color: #F9D773;
`;

const FlexSample = () => {
	return (
		<div>
			<Container>
				<Heading>Flex & Column</Heading>
				<Heading h5>
					Note: Column is intended to be used as a flex child.
					Give each Column component a props of "three" for three columns
					({"<Column three />"}), "four" for four columns, or leave
					without props to default to two columns
				</Heading>
			</Container>
			<Container style={{ backgroundColor: 'var(--pDarker)' }}>
				<Container small full style={{ backgroundColor: "var(--pBase)" }}>
					<Flex justifyAround>
						<FlexChild />
						<FlexChild />
						<FlexChild />
						<FlexChild />
					</Flex>
				</Container>
			</Container>
			<Container style={{ background: 'var(--pDark)' }}>
				<Flex noWrap>
					<Column style={{ height: 300, backgroundColor: '#5CB5FA', }}>
						<Heading h4>Column 1</Heading>
						<Heading h4>Column 1</Heading>
						<Heading h4>Column 1</Heading>
					</Column>
					<Column style={{ height: 300, backgroundColor: '#B9DFFD', }} >
						<Heading h4>Column 2</Heading>
						<Heading h4>Column 2</Heading>
						<Heading h4>Column 2</Heading>
					</Column>
				</Flex>
			</Container>
			<Container style={{ background: 'var(--pDark)' }}>
				<Flex noWrap>
					<Column three style={{ height: 300, backgroundColor: '#5CB5FA', }}>
						<Heading h4>Column 1</Heading>
						<Heading h4>Column 1</Heading>
						<Heading h4>Column 1</Heading>
					</Column>
					<Column three style={{ height: 300, backgroundColor: '#B9DFFD', }} >
						<Heading h4>Column 2</Heading>
						<Heading h4>Column 2</Heading>
						<Heading h4>Column 2</Heading>
					</Column>
					<Column three style={{ height: 300, backgroundColor: '#5CB5FA', }} >
						<Heading h4>Column 3</Heading>
						<Heading h4>Column 3</Heading>
						<Heading h4>Column 3</Heading>
					</Column>
				</Flex>
			</Container>
			<Container style={{ background: 'var(--pDark)' }}>
				<Flex noWrap>
					<Column four style={{ height: 300, backgroundColor: '#5CB5FA', }}>
						<Heading h4>Column 1</Heading>
						<Heading h4>Column 1</Heading>
						<Heading h4>Column 1</Heading>
					</Column>
					<Column four style={{ height: 300, backgroundColor: '#B9DFFD', }} >
						<Heading h4>Column 2</Heading>
						<Heading h4>Column 2</Heading>
						<Heading h4>Column 2</Heading>
					</Column>
					<Column four style={{ height: 300, backgroundColor: '#5CB5FA', }} >
						<Heading h4>Column 3</Heading>
						<Heading h4>Column 3</Heading>
						<Heading h4>Column 3</Heading>
					</Column>
					<Column four style={{ height: 300, backgroundColor: '#B9DFFD', }} >
						<Heading h4>Column 4</Heading>
						<Heading h4>Column 4</Heading>
						<Heading h4>Column 4</Heading>
					</Column>
				</Flex>
			</Container>
			<Container full style={{ background: "var(--pDarker)" }}>
				<Flex justifyBetween>
					<Heading h4>These</Heading>
					<Heading h4>Are</Heading>
					<Heading h4>Spaced</Heading>
					<Heading h4>Between</Heading>
				</Flex>
			</Container>
			<Container full style={{ background: "var(--pDark)" }}>
				<Flex justifyEven>
					<Heading h4>These</Heading>
					<Heading h4>Are</Heading>
					<Heading h4>Spaced</Heading>
					<Heading h4>Evenly</Heading>
				</Flex>
			</Container>
			<Container style={{ background: "var(--pDarker)" }}>
				<Flex justifyAround>
					<Heading h4>These</Heading>
					<Heading h4>Are</Heading>
					<Heading h4>Spaced</Heading>
					<Heading h4>Around</Heading>
				</Flex>
			</Container>
		</div >
	)
}

const randomCards = []

for (let i = 0; i < 9; i++) {
	randomCards.push({
		title: faker.lorem.words(2),
		copy: faker.lorem.sentences(3),
	})
}

const CardSample = () => {
	return (
		<div>
			<Container>
				<Heading>Card</Heading>
				<p style={{ fontSize: "1.6rem" }}>
					Note: Planning on setting up cards to have matching height no matter what, also plan to make the blue cards NOT blue if we stick with our current color scheme
				</p>
			</Container>
			<Container>
				<Flex>
					<Card>
						<Heading h3>Normal Card</Heading>
						<p>
							Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi
							porta gravida at eget metus. Donec sed odio dui.
                        </p>
					</Card>
					<Card big>
						<Heading h3>Big Card</Heading>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
							odio dui. Donec id elit non mi porta gravida at eget metus.
            </p>
					</Card>
					<Card primary delay={1500}>
						<Heading h3 style={{ color: '#fff' }}>
							Primary Delayed Card
            </Heading>
						<p>
							Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi
							porta gravida at eget metus. Donec sed odio dui.
            </p>
					</Card>
				</Flex>
			</Container>
			<Container>
				<Heading>Card List</Heading>
				<p style={{ fontSize: "1.6rem" }}>
					Note: refresh the page to see the magic
				</p>
				<Flex>
					{randomCards.map((el, index) => {
						return (
							<Card primary key={index} delay={index * 125} style={{ width: '25%' }}>
								<Heading style={{ color: '#fff' }} h4>
									{el.title}
								</Heading>
								<p>{el.copy}</p>
							</Card>
						)
					})}
				</Flex>
			</Container>
		</div >
	)
};

const HeadingSample = () => {
	return (
		<div>
			<Container>
				<Heading>Heading</Heading>
			</Container>
			<Container>
				<Heading>h1 - Heading 1</Heading>
				<Heading h2>h2 - Heading 2</Heading>
				<Heading h3>h3 - Heading 3</Heading>
				<Heading h4>h4 - Heading 4</Heading>
				<Heading h5>h5 - Heading 5</Heading>
			</Container>
		</div>
	)
}


const Example = () => {
	return (
		<div>
			<ContainerSample />
			<Container style={{ height: 100 }} />
			<FlexSample />
			<Container style={{ height: 100 }} />
			<ButtonSample />
			<CardSample />
			<HeadingSample />
		</div>
	)
}

export default Example;