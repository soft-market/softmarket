import { Button } from "react-native";

type Props = {
  width: number;
  height: number;
  onPress?: () => void;
  content: string;
};

export default function ({ onPress, content }: Props) {
  return <Button onPress={onPress ? onPress : () => {}} title={content} />;
}
