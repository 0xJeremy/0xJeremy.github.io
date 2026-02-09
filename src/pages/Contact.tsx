/**
 * Contact Page
 *
 * Contact information and future contact form location.
 * Currently shows a placeholder for the upcoming form.
 *
 * Structure:
 * - Page title
 * - Description text
 * - Placeholder box for form (dashed border)
 *
 * Styling:
 * - Uses design tokens throughout
 * - Centered layout with max-width constraint
 *
 * TODO:
 * - Implement actual contact form
 * - Add email/social links
 * - Consider form validation and submission handling
 */

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  max-width: 600px;
  margin: 0 auto;
  padding: var(--spacing-3xl) var(--spacing-xl);
`;

const Title = styled.h1`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  letter-spacing: var(--letter-spacing-tight);
`;

const Description = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  line-height: var(--line-height);
`;

const Placeholder = styled.div`
  padding: var(--spacing-2xl);
  background: var(--color-gray-100);
  border-radius: var(--radius-lg);
  border: 2px dashed var(--color-gray-300);
  text-align: center;
  color: var(--color-text-muted);
`;

export const Contact = () => (
  <Container>
    <Title>Contact</Title>
    <Description>Get in touch — I&apos;d love to hear from you.</Description>
    <Placeholder>Contact form coming soon...</Placeholder>
  </Container>
);
