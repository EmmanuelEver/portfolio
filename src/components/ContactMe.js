import React, {useState} from "react"
import styled from "styled-components"



const ContactSection = () => {
	const [formData, setFormData] = useState({
		firstName:"",
		lastName:"",
		email:"",
		message:""
	})

	const inputHandler = e => {
		setFormData({
			...formData,
			[e.target.name]:e.target.value
		})
	}

	const encode = (data) => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
	  }

	const handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...formData })
		  })
			.then(() => alert("Success!"))
			.catch(error => alert(error));
	
		  e.preventDefault();
	}

	return(
		<Section>
			<SectionWrapper>
				<Heading>
					<HeaderText>
						Contact Me
					</HeaderText>
				</Heading>

				<Body>
					<FormWrapper>
						<Form 
							onSubmit={handleSubmit}
							name="contact" 
							method="post" 
							data-netlify="true" 
							data-netlify-honeypot="bot-field"
							>
							<input type="hidden" name="form-name" value="contact" />
							<FormGroup>
								<Label htmlFor="firstname">Name</Label>
								<InputGroup>
									<InputFirstName type="text" value={formData.firstName} onChange={inputHandler} name="firstName" id="firstName" placeholder="Firstname"/>
									<InputLastName type="text" value={formData.lastName} onChange={inputHandler} name="lastName" id="lastName" placeholder="Lastname"/>
								</InputGroup>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="email">Email</Label>
								<Input type="email" value={formData.email} onChange={inputHandler} id="email" name="email" placeholder="your@email.com" required/>
							</FormGroup>

							<FormGroup>
								<Label htmlFor="message">Message</Label>
								<TextArea id="message" value={formData.message} onChange={inputHandler} name="message" placeholder="Message" />
							</FormGroup>

							<SubmitButton type="submit">Send Message</SubmitButton>
						</Form>
					</FormWrapper>
				</Body>
			</SectionWrapper>
		</Section>
	)
}

const Section = styled.section`
	max-width: 1920px;
	margin: 0 auto;
	padding: 0 10% 50px;

	@media (max-width: 767px){
		padding: 0 37px 50px;
	}
`
const SectionWrapper = styled.div`
	display:flex;
	justify-content: space-between;

	@media (max-width: 1024px){
		flex-direction: column;
	}
`

const Heading = styled.div`
	margin-right:50px;
	width: 30%;

	@media (max-width: 1024px){
		width: 100%;
		margin-right: 0;
		margin-bottom: 30px;
	}
`
const HeaderText = styled.h1`
	font-family: var(--text-primary);
	font-weight: 700;
	font-size: clamp(2.5rem, 2vw, 3rem);
    line-height: calc(clamp(2.5rem, 2vw, 3rem) * 1.3);
	color:#33323D;
`

const Body = styled.div`
	flex: 1;
	max-width: 1000px;
`

const FormWrapper = styled.div`
	width: 100%;
`
const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 767px){
		width: 100%;
		max-width: 700px;
	}
`

const FormGroup = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 0 0 24px;
`

const Label = styled.label`
	font-size: clamp(1rem, 1vw, 1.2rem);
    line-height: calc(clamp(1rem, 1.3vw, 1.2rem) * 1.5);
	color:#33323D;
	opacity: .8;
	font-weight: 700;

`

const Input = styled.input`
	width: 100%;
	padding: 12px;
    margin: 6px 0 4px;
    border: 1px solid #ccc;
    background: #E5E5E6;
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    line-height: normal;
    border-radius: 2px;
    outline-width: 0;

    &:focus{
    	box-shadow: 0 0 5px #64B6A5;
		border: 1px solid #64B6A5;
    }
`

const TextArea = styled.textarea`
	resize: none;
	width: 100%;
	height: 150px;
	padding: 12px;
    margin: 6px 0 4px;
    border: 1px solid #ccc;
    background: #E5E5E6;
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    line-height: normal;
    border-radius: 2px;
    outline-width: 0;

    &:focus{
    	box-shadow: 0 0 5px #64B6A5;
		border: 1px solid #64B6A5;
    }
`

const InputGroup = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;

`

const InputFirstName = styled.input`
	width:50%;
	padding: 12px;
    margin: 6px 0 4px;
    border: 1px solid #ccc;
    background: #E5E5E6;
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    line-height: normal;
    border-radius: 2px;
    outline-width: 0;

    &:focus{
    	box-shadow: 0 0 5px #64B6A5;
		border: 1px solid #64B6A5;
    }
`

const InputLastName = styled.input`
	width: 50%;
    padding: 12px;
    margin: 6px 0 4px;
    border: 1px solid #ccc;
    background: #E5E5E6;
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    line-height: normal;
    border-radius: 2px;
    outline-width: 0;

    &:focus{
    	box-shadow: 0 0 5px #64B6A5;
		border: 1px solid #64B6A5;
    }
`

const SubmitButton = styled.button`
	align-self: flex-start;
	background-color: #203A4C;
	border: 1px solid #fff;
    color: #ffffff;
    padding: 1rem 2.5rem;
    text-decoration: none;
    display: inline-block;
    font-size: clamp(.7rem, 1.2vw, .9rem);
    font-Family: var(--text-secondary);
    min-width: 100px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;

    @media (max-width: 767px){
		margin-left: 0px;
		margin-top: 30px;
	}

    &:hover{
    	border: 1px solid #33323D;
    	background-color: #f2f2f2;
    	color: #000;
    	transform: scale(1.05);
    	font-size: 700;
    }
    &:active{
    	border: 1px solid #33323D;
    	background-color: #f2f2f2;
    	color: #000;
    	transform: scale(0.8);
    	font-size: 700;
    }

    @media (max-width:767px){
    	width: 100%;
    }
`

export default ContactSection;