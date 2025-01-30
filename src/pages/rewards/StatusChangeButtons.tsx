import ButtonGroup from "@mui/material/ButtonGroup";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import BlockIcon from "@mui/icons-material/Block";
import { useRecordContext, useUpdate } from 'react-admin';

type RewardStatus = "inactive" | "pending" | "approved" | "declined";
type Reward = {
  id: number;
  status: RewardStatus;
}

const StatusChangeButtons = () => {
  const record = useRecordContext<Reward>();
  const [update] = useUpdate<Reward>();

  if (!record) {
    return null;
  }
  const {id, status} = record;

  const handleMoveBack = () => {
    const newStatus = ["approved", "declined"].includes(status) ? "pending" : "inactive";
    update("rewards", { id, data: { status: newStatus } });
  };
  const handleMoveForth = () => {
    update("rewards", { id, data: { status: "pending" } });
  };
  const handleDecline = () => {
    update("rewards", { id, data: { status: "declined" } });
  };
  const handleApprove = () => {
    update("rewards", { id, data: { status: "approved" } });
  };

  const moveBackEnabled = ["pending", "approved", "declined"].includes(status)
  const moveForthEnabled = status === "inactive";
  const declineEnabled = status === "pending";
  const approveEnabled = status === "pending";

  return (
    <ButtonGroup variant="contained">
      <IconButton color="info" onClick={handleMoveBack} disabled={!moveBackEnabled}>
        <KeyboardDoubleArrowLeftIcon />
      </IconButton>
      <IconButton color="error" onClick={handleDecline} disabled={!declineEnabled}>
        <BlockIcon />
      </IconButton>
      <IconButton color="success" onClick={handleApprove} disabled={!approveEnabled}>
        <CheckIcon />
      </IconButton>
      <IconButton color="info" onClick={handleMoveForth} disabled={!moveForthEnabled}>
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default StatusChangeButtons;
