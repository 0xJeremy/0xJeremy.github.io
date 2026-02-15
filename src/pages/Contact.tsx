import styled from "styled-components";
import { ContactSection } from "@/components/sections/ContactSection";
import { contactContent } from "@/content";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  padding-top: var(--spacing-4xl);
`;

export const Contact = () => {
  return (
    <PageContainer>
      <ContactSection {...contactContent} />
    </PageContainer>
  );
};
