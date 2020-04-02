/*  eslint linebreak-style: ["error", "windows"]    */
import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Button, Typography } from '@wld/ui';

import { Dialog, DialogContent, DialogActions } from '@material-ui/core';

import { DialogTitle } from '../dialog/dialog_title/dialog_title';

const DefaultTitle = <FormattedMessage id="ConfirmDialog.title" defaultMessage="Are you sure?" />;

const DefaultContent = (
    <FormattedMessage id="ConfirmDialog.content" defaultMessage="Do you really want to achieve this action?" />
);

const ConfirmDialogComponent = ({ open, onClose, onConfirm, title = DefaultTitle, content = DefaultContent }) => (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            <Typography>{content}</Typography>
        </DialogContent>
        <DialogActions>
            <Button size="small" onClick={onClose}>
                <FormattedMessage id="Main.lang.close" defaultMessage="Close" />
            </Button>
            <Button color="primary" size="small" onClick={onConfirm}>
                <FormattedMessage id="Main.lang.confirm" defaultMessage="Confirm" />
            </Button>
        </DialogActions>
    </Dialog>
);

export const ConfirmDialog = ConfirmDialogComponent;
