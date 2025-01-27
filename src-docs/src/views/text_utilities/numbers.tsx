import React, { useContext } from 'react';

import { ThemeContext } from '../../components/with_theme';

import {
  EuiCode,
  EuiTextAlign,
  EuiFlexGrid,
  EuiFlexItem,
  useEuiNumberFormat,
} from '../../../../src';
import { ThemeExample } from '../theme/_components/_theme_example';
import { css } from '@emotion/react';

export default () => {
  const themeContext = useContext(ThemeContext);
  const currentLanguage = themeContext.themeLanguage;
  const showSass = currentLanguage.includes('sass');

  return (
    <>
      {/* Mixin */}
      {!showSass ? (
        <ThemeExample
          title={<code>useEuiNumberFormat()</code>}
          type="hook"
          description={
            <p>
              Applies{' '}
              <EuiCode language="sass">
                {'font-feature-settings: "tnum";'}
              </EuiCode>{' '}
              so that numbers align more properly in a column, especially when
              right aligned.
            </p>
          }
          example={
            <EuiTextAlign textAlign="right">
              <EuiFlexGrid columns={2}>
                <EuiFlexItem>
                  <p>
                    <strong>Without function</strong>
                    <br />
                    11317.11
                    <br />
                    0040.900
                  </p>
                </EuiFlexItem>
                <EuiFlexItem>
                  <p
                    css={css`
                      ${useEuiNumberFormat()}
                    `}
                  >
                    <strong>With function</strong>
                    <br />
                    11317.11
                    <br />
                    0040.900
                  </p>
                </EuiFlexItem>
              </EuiFlexGrid>
            </EuiTextAlign>
          }
          snippet={'${useEuiNumberFormat()}'}
          snippetLanguage="emotion"
        />
      ) : (
        <ThemeExample
          title={<code>@include euiNumberFormat</code>}
          type="mixin"
          description={
            <p>
              Use this Sass mixin to apply number text styles to your selectors.
              No parameters are taken for this utility.
            </p>
          }
          snippet={'@include euiNumberFormat;'}
          snippetLanguage="scss"
        />
      )}
      <ThemeExample
        title={<code>.eui-textNumber</code>}
        type="className"
        description={
          <p>
            Applies the <EuiCode>useEuiNumberFormat()</EuiCode> styles as an
            overriding CSS utility class.
          </p>
        }
        example={
          <EuiTextAlign textAlign="right">
            <EuiFlexGrid columns={2}>
              <EuiFlexItem>
                <p>
                  <strong>Without class</strong>
                  <br />
                  11317.11
                  <br />
                  0040.900
                </p>
              </EuiFlexItem>
              <EuiFlexItem>
                <p className="eui-textNumber">
                  <strong>With class</strong>
                  <br />
                  11317.11
                  <br />
                  0040.900
                </p>
              </EuiFlexItem>
            </EuiFlexGrid>
          </EuiTextAlign>
        }
        snippet={`<div className="eui-textNumber">
  /* Your number content */
</div>`}
      />
    </>
  );
};
