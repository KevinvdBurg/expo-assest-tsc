import { useAssets } from 'expo-asset';
import { Asset } from 'expo-asset/src/Asset';

export enum AssetsName {
  Favicon = 'favicon',
  // Add other asset names here
}

const assetPathMapping: Record<AssetsName, number> = {
  [AssetsName.Favicon]: require('assets/favicon.png'),
  // Add other assets here
};

export default function useAssetsHelper(assetNames: AssetsName[]): [Asset[] | undefined, Error | undefined] {
  const moduleIds = assetNames.map((assetName) => assetPathMapping[assetName]);

  return useAssets(moduleIds);
}