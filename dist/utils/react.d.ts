import React from 'react'
export declare function generic<
  TComponent,
  TProps = TComponent extends (...args: any[]) => any
    ? Parameters<TComponent>[0]
    : never
>(
  Component: TComponent,
): TComponent &
  Pick<
    React.ComponentType<TProps>,
    'propTypes' | 'contextTypes' | 'defaultProps' | 'displayName'
  >
export declare const genericMemo: <
  TComponent,
  TProps = TComponent extends (...args: any[]) => any
    ? Parameters<TComponent>[0]
    : never
>(
  Component: TComponent,
  propsAreEqual?:
    | ((prevProps: Readonly<TProps>, nextProps: Readonly<TProps>) => boolean)
    | undefined,
) => TComponent & Pick<React.NamedExoticComponent<TProps>, 'displayName'>
