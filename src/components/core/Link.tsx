import { panda, type HTMLPandaProps } from '../../../panda/jsx';
import { link, type LinkVariants, } from '../../../panda/recipes';
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = LinkVariants & { href: NextLinkProps['href'] } & HTMLPandaProps<'a'>;

export const Link = (props: LinkProps) => {
  const { href, variant, content, ...rest } = props;

  return (
    <NextLink legacyBehavior href={href} passHref>
      <panda.a className={link({ variant })} {...rest} />
    </NextLink>
  );
}
