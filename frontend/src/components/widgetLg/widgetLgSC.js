import styled from "styled-components";

export const WidgetLgContainer = styled.div`
  flex: 2;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;
export const WidgetLgTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

export const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

export const WidgetLgTr = styled.tr``;

export const WidgetLgTh = styled.th`
  text-align: left;
`;

export const WidgetLgUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
`;

export const WidgetLgName = styled.span`
  font-weight: 300;
`;

export const WidgetLgDate = styled.td`
  font-weight: 300;
`;

export const WidgetLgAmount = styled.td``;

export const WidgetLgStatus = styled.td``;

export const Button = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  /* margin-left: 14px; */

  ${({ type }) =>
    type === "Approved"
      ? `  background-color: #e5faf2;
          color: #3bb077;
        `
      : type === "Declined"
      ? `background-color: #fff0f1;
        color: #d95087;
        `
      : type === "Pending"
      ? `  background-color: #ebf1fe;
          color: #2a7ade;
          `
      : null}
`;
