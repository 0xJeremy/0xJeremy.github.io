/**
 * ContactSection Component
 *
 * A centered call-to-action section for the bottom of the home page.
 * Mimics the old website's "What's Next?" section.
 *
 * Behavior:
 * - Centered layout with max-width constraint
 * - Large accent-colored "What's Next?" overheading
 * - Bold "Get In Touch" title
 * - Descriptive text
 * - "Say Hello" mailto button
 * - Footer with site credits
 */

import styled from "styled-components";
import { FlatSection } from "./FlatSection";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: var(--spacing-xl) 0;
`;

const Overline = styled.p`
  color: var(--color-accent);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-md);
`;

const Title = styled.h2`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-on-dark);
  margin-bottom: var(--spacing-lg);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-3xl);
  }
`;

const Description = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);
  line-height: 1.6;
  margin-bottom: var(--spacing-3xl);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-base);
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md) var(--spacing-xl);
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-md);
  color: var(--color-accent);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  text-decoration: none;
  transition: all var(--transition-fast);
  background: transparent;

  &:hover {
    background: var(--color-accent-subtle);
  }
`;

const Footer = styled.footer`
  margin-top: var(--spacing-4xl);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--color-gray-400);

  a {
    transition: color var(--transition-fast);
    &:hover {
      color: var(--color-accent);
    }
  }
`;

export interface ContactSectionProps {
  id?: string;
  sectionNumber: string;
  title: string;
  heading: string;
  description: string;
  cta: {
    label: string;
    href: string;
    external?: boolean;
  };
  footer?: {
    text: string;
    href: string;
  };
}

export const ContactSection = ({
  id,
  sectionNumber,
  title, // "What's Next?" in old site, but passed as title to fit FlatSection prop if needed
  heading, // "Get In Touch"
  description,
  cta,
  footer,
}: ContactSectionProps) => {
  return (
    <FlatSection
      id={id}
      title="" // We won't use the default FlatSection header because this section is centered
      showHeaderLine={false}
      sectionNumber="" // We'll handle the number layout manually in standard FlatSection if we wanted, but here we do custom centered layout
    >
      <Container>
        <Overline>
          {sectionNumber}. {title}
        </Overline>
        <Title>{heading}</Title>
        <Description>{description}</Description>
        <Button
          href={cta.href}
          target={cta.external ? "_blank" : undefined}
          rel={cta.external ? "noopener noreferrer" : undefined}
        >
          {cta.label}
        </Button>

        {footer && (
          <Footer>
            <a href={footer.href} target="_blank" rel="noopener noreferrer">
              {footer.text}
            </a>
          </Footer>
        )}
      </Container>
    </FlatSection>
  );
};
